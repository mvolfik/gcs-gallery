<script lang="ts">
  import GalleryAppSSR from "../generated/ssrRender";
  import GalleryAppCode from "../generated/GalleryApp.svelte.js?raw";
  import IndexTemplate from "./gallery/index.html?raw";
  import {
    AuthData,
    buildJs,
    isMediaFile,
    processImage,
    queryApi,
    relPath,
  } from "./utils";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import Folder from "./Folder.svelte";
  import type { GalleryData } from "svelte-photoswipe";

  async function generateGallery() {
    if (selectedPath === null) return;
    const data: {
      items?: { name: string; bucket: string }[];
    } = await queryApi(
      $authData,
      "GET",
      `https://storage.googleapis.com/storage/v1/b/${encodeURIComponent(
        selectedPath[1]
      )}/o?${new URLSearchParams({
        delimiter: "/",
        prefix: [...selectedPath.slice(2), ""].join("/"),
      })}`
    );
    const items: GalleryData = await Promise.all(
      data.items
        ?.filter(({ name }) => isMediaFile(name))
        .map((imageData) => processImage($authData, imageData)) ?? []
    );
    const props = { title, items };
    const {
      head,
      html,
      css: { code: css },
    } = GalleryAppSSR.render(props);

    // split to workaround Svelte parsing bug
    const fullHead = head + "<sty" + "le>" + css + "</sty" + "le>";

    let js = buildJs(props);

    const indexPage = IndexTemplate.replace("<!-- %gallery_head% -->", fullHead)
      .replace("<!-- %gallery_html% -->", html)
      .replace("/* %gallery_code% */", js);

    await Promise.all([
      queryApi(
        $authData,
        "POST",
        `https://storage.googleapis.com/upload/storage/v1/b/${encodeURIComponent(
          selectedPath[1]
        )}/o?${new URLSearchParams({
          name: relPath(
            [...selectedPath.slice(2), ""].join("/"),
            "GalleryApp.svelte.js"
          ),
          uploadType: "media",
        })}`,
        GalleryAppCode,
        { "Content-Type": "application/javascript" }
      ),
      queryApi(
        $authData,
        "POST",
        `https://storage.googleapis.com/upload/storage/v1/b/${encodeURIComponent(
          selectedPath[1]
        )}/o?${new URLSearchParams({
          name: relPath(
            [...selectedPath.slice(2), ""].join("/"),
            "photos.html"
          ),
          uploadType: "media",
        })}`,
        indexPage,
        { "Content-Type": "text/html" }
      ),
    ]);
  }

  const authData: Writable<AuthData> = getContext("authStatus");

  let selectedPath: null | string[] = null;
  let title = "";
</script>

{#if selectedPath === null}
  <div style="font-size: 1.3rem;">
    <pre
      style="font-family: 'Courier New', Courier, monospace; margin: 0; font-size: 0.9em;">Select gallery location</pre>
    <Folder bind:selectedPath path={[]} />
  </div>
{:else}
  <p>
    Selected path: <span
      style="font-family: 'Courier New', Courier, monospace; margin: 0;"
      >{selectedPath.join("/")}</span
    >
    <button on:click={() => (selectedPath = null)}>Change</button>
  </p>
{/if}

<p>
  <label>Gallery title: <input type="text" bind:value={title} /></label>
</p>
<p>
  <button
    disabled={title.length < 1 || selectedPath === null}
    on:click={generateGallery}>Generate</button
  >
</p>
