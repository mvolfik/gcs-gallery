/// <reference types="svelte" />
/// <reference types="vite/client" />

import type { create_ssr_component } from "svelte/internal";

declare module "generated/ssrRender.js" {
  export default create_ssr_component();
}
