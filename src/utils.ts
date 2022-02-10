export function buildJs(title: string): string {
  return `import GalleryApp from "./GalleryApp.svelte.js";
new GalleryApp({
  target: document.getElementById("app"),
  hydrate: true,
  props: ${JSON.stringify({ title, items: ["foo", "bar", "baz"] })},
});
`;
}

export type AuthData = { access_token: string; expires_at: string };
export async function queryApi(
  authData: AuthData,
  method: string,
  url: string,
) {
  if (new Date() > new Date(authData.expires_at)) {
    window.location.reload();
    return;
  }

  const r = await fetch(url, {
    method,
    headers: { Authorization: "Bearer " + authData.access_token },
  });
  return await r.json();
}

export const filterMediaFilenames = (fns: string[]) =>
  fns.filter((x) => {
    const parts = x.split(".");
    return ["png", "jpg", "jpeg", "gif", "webp"].includes(
      parts[parts.length - 1].toLowerCase()
    );
  });
