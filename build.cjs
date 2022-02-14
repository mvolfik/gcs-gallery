const rollupPluginSvelte = require("rollup-plugin-svelte");
const fs = require("node:fs/promises");
const { rollup } = require("rollup");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { terser } = require("rollup-plugin-terser");

const dummyCssImportPlugin = {
  name: "dummy-css-import-plugin",
  resolveId(id) {
    if (id === "photoswipe/dist/photoswipe.css") {
      return id;
    }
    return null;
  },
  load(id) {
    if (id === "photoswipe/dist/photoswipe.css") {
      return "";
    }
    return null;
  },
};

async function buildOnce() {
  const commonSvelteConfig = {
    hydratable: true,
    css: false,
    enableSourcemap: false,
  };

  const bundle = await rollup({
    input: "src/gallery/GalleryApp.svelte",
    external: [
      "svelte",
      "svelte/internal",
      "svelte/store",
      "photoswipe/dist/photoswipe.esm",
      "photoswipe/dist/photoswipe-lightbox.esm",
    ],
    plugins: [
      dummyCssImportPlugin,
      rollupPluginSvelte({
        emitCss: false,
        compilerOptions: {
          ...commonSvelteConfig,
          generate: "ssr",
        },
      }),
    ],
  });
  await bundle.write({
    file: "generated/ssrRender.js",
    format: "es",
  });

  const domBundle = await rollup({
    input: "src/gallery/GalleryApp.svelte",
    plugins: [
      dummyCssImportPlugin,
      nodeResolve(),
      rollupPluginSvelte({
        emitCss: false,
        compilerOptions: {
          ...commonSvelteConfig,
          generate: "dom",
        },
      }),
    ],
  });
  await domBundle.write({
    file: "generated/GalleryApp.svelte.js",
    format: "es",
    plugins: [terser()],
  });
}

async function main(watch) {
  await buildOnce();
  console.log("Build successful.");

  if (watch) {
    console.log(
      "Watching and rebuilding on changes to src/gallery/GalleryApp.svelte..."
    );
    console.log();
    for await (const e of fs.watch("src/gallery/GalleryApp.svelte")) {
      process.stdout.write("Rebuilding...");
      await buildOnce()
        .then(() => console.log("Done"))
        .catch((e) => console.error("Build failed: ", e.message));
    }
  }
}
if (require.main === module) {
  main(process.argv.includes("--watch")).catch((e) =>
    console.error("Build failed: ", e.message)
  );
}

module.exports = main;
