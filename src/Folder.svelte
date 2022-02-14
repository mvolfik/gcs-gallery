<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { AuthData, filterMediaFilenames, queryApi } from "./utils";

  const accessors: {
    urlGetter: (path: { name: string }[]) => string;
    dataGetter: (data: any) => { fileCount: number; subfolders: string[] };
  }[] = [
    {
      urlGetter: () =>
        "https://cloudresourcemanager.googleapis.com/v1beta1/projects",
      dataGetter: (data) => ({
        fileCount: 0,
        subfolders: data.projects?.map((x: any) => x.projectId) ?? [],
      }),
    },
    {
      urlGetter: ([{ name }]) =>
        "https://storage.googleapis.com/storage/v1/b?project=" +
        encodeURIComponent(name),
      dataGetter: (data) => ({
        fileCount: 0,
        subfolders: data.items?.map((x: any) => x.id) ?? [],
      }),
    },
    {
      urlGetter: ([_, { name: bucket }, ...path]) =>
        `https://storage.googleapis.com/storage/v1/b/${encodeURIComponent(
          bucket
        )}/o?${new URLSearchParams({
          delimiter: "/",
          prefix: path.map((x) => x.name).join("/"),
        })}`,
      dataGetter: (data) => ({
        fileCount: filterMediaFilenames(
          data.items?.map((x: any) => x.name) ?? []
        ).length,
        subfolders: data.prefixes ?? [],
      }),
    },
  ];
  async function fetchContent(
    authData: AuthData,
    path: { name: string }[]
  ): Promise<{ fileCount: number; subfolders: string[] }> {
    const acc = accessors[Math.min(path.length, 2)];
    const data = await queryApi(authData, "GET", acc.urlGetter(path));
    return acc.dataGetter(data);
  }

  const authData: Writable<AuthData> = getContext("authStatus");

  export let selectedPath: null | string;
  export let path: { name: string; draw: boolean }[];

  let expanded: null | string = null;

  $: contentPromise = fetchContent($authData, path);
  $: prefix = path.map(({ draw }) => (draw ? "│" : " ") + "  ").join("");
</script>

{#await contentPromise}
  <pre class="loading">{prefix}  Loading...</pre>
{:then { fileCount, subfolders }}
  {#each subfolders as subfolder, i (subfolder)}
    {@const isExpanded = expanded === subfolder}
    {@const isLast = fileCount === 0 && i === subfolders.length - 1}
    <pre
      class:expanded={isExpanded}
      on:click={() =>
        (expanded = isExpanded ? null : subfolder)}>{prefix}{isLast
        ? "└"
        : "├"}─<span class="material-icons"
        >{isExpanded && path.length >= 2
          ? "folder_open"
          : ["cloud_circle", "storage", "folder"][
              Math.min(path.length, 2)
            ]}</span
      >{subfolder}</pre>
    {#if isExpanded}
      <svelte:self
        path={[...path, { name: subfolder, draw: !isLast }]}
        bind:selectedPath
      />
    {/if}
  {/each}
  {#if fileCount > 0}
    <pre class="file-count">{prefix}└┄<span class="material-icons"
        >burst_mode</span
      >{fileCount} files <button
        on:click={() => (selectedPath = path.map((x) => x.name).join("/"))}
        >Select</button
      ></pre>
  {:else if subfolders.length === 0}
    <pre class="file-count">{prefix}└┄<span class="material-icons"
        >image_not_supported</span
      >Empty folder</pre>
  {/if}
{:catch e}
  <pre class="error">Error: {e}</pre>
{/await}

<style>
  pre {
    font-family: "Courier New", Courier, monospace;
    margin: 0;
  }
  .material-icons {
    font-size: unset !important;
    vertical-align: text-top;
    padding: 0.1em 0.3em 0 0.4em;
  }
</style>
