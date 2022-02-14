const svelte = require("svelte/compiler");
const fs = require("node:fs/promises");
const esbuild = require("esbuild");

async function mkdir(path) {
  return fs.mkdir(path).catch(() => {});
}

async function buildDomCode(code) {
  await fs.writeFile("generated/GalleryApp.svelte.js", code);

  const result = await esbuild
    .build({
      entryPoints: ["generated/GalleryApp.svelte.js"],
      bundle: true,
      write: true,
      format: "esm",
      target: "es6",
      outfile: "generated/GalleryApp.svelte.js",
      allowOverwrite: true,
    })
    .catch((e) => e);
  if (result.errors?.length > 0) {
    throw new Error(
      "Errors during build: " + result.errors.map((e) => e.text).join(", ")
    );
  }
}

async function buildOnce() {
  const src = await fs.readFile("src/gallery/GalleryApp.svelte", {
    encoding: "utf-8",
  });

  const commonConfig = {
    filename: "GalleryApp.svelte",
    format: "esm",
    hydratable: true,
    css: false,
    enableSourcemap: false,
  };
  const dom = svelte.compile(src, { ...commonConfig, generate: "dom" });
  const ssr = svelte.compile(src, { ...commonConfig, generate: "ssr" });
  if (dom.css.code != ssr.css.code) {
    throw new Error("DOM and SSR generated CSS are different");
  }
  await mkdir("generated").then(() => {
    fs.writeFile("generated/ssrRender.js", ssr.js.code).catch((e) =>
      console.error("Writing SSR code failed:", e)
    );
    buildDomCode(dom.js.code).catch((e) => {
      console.error("Building DOM code failed:", e.message);
    });
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
