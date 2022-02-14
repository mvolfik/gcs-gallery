import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
// https://vitejs.dev/config/

const https = {
  cert: readFileSync("ssl/cert.pem", "utf-8"),
  key: readFileSync("ssl/key.pem", "utf-8"),
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: ["index.html", "callback.html"],
    },
  },
  plugins: [svelte()],
  base: "/gcs-gallery/",
  server: {
    https,
  },
  preview: {
    https,
  },
});
