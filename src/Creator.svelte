<script lang="ts">
  import GalleryAppSSR from "../generated/ssrRender";
  import GalleryAppCode from "../generated/GalleryApp.svelte.js?raw";
  import IndexTemplate from "./gallery/index.html?raw";
  import { AuthData, buildJs, queryApi } from "./utils";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import Folder from "./Folder.svelte";

  function generateGallery() {
    const {
      head,
      html,
      css: { code: css },
    } = GalleryAppSSR.render({
      title,
      items: ["foo", "bar", "baz"],
    });

    // split to workaround Svelte parsing bug
    const fullHead = head + "<sty" + "le>" + css + "</sty" + "le>";

    let js = buildJs(title);

    console.log(
      IndexTemplate.replace("<!-- %gallery_head% -->", fullHead)
        .replace("<!-- %gallery_html% -->", html)
        .replace("/* %gallery_code% */", js)
    );
  }

  const authData: Writable<AuthData> = getContext("authStatus");

  let selectedPath: null | string = null;
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
      >{selectedPath}</span
    >
    <button on:click={() => (selectedPath = null)}>Change</button>
  </p>
{/if}

<p>
  <label>Gallery title: <input type="text" bind:value={title} /></label>
</p>
<p>
  <button on:click={generateGallery}>Generate</button>
</p>
