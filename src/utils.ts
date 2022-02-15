import blobResize from "image-blob-reduce";
import type { GalleryData, GalleryItem } from "svelte-photoswipe";

export function buildJs(props: { title: string; items: GalleryData }): string {
  return `import GalleryApp from "./GalleryApp.svelte.js";
new GalleryApp({
  target: document.getElementById("app"),
  hydrate: true,
  props: ${JSON.stringify(props)},
});
`;
}

export type AuthData = { access_token: string; expires_at: string };
export async function queryApi(
  authData: AuthData,
  method: string,
  url: string,
  body?: ArrayBuffer | string,
  headers?: Record<string, string>
) {
  if (new Date() > new Date(authData.expires_at)) {
    window.location.reload();
    return;
  }

  const r = await fetch(url, {
    method,
    body,
    headers: { Authorization: "Bearer " + authData.access_token, ...headers },
  });
  return await r.json();
}

export const isMediaFile = (fn: string) => {
  const parts = fn.split(".");
  return ["png", "jpg", "jpeg", "gif", "webp"].includes(
    parts[parts.length - 1].toLowerCase()
  );
};

async function getSize(blob: Blob): Promise<{ height: number; width: number }> {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(blob);
  await new Promise((resolve) => img.addEventListener("load", resolve));
  return { height: img.height, width: img.width };
}

const resizer = blobResize();
export async function processImage(
  authData: AuthData,
  data: { bucket: string; name: string }
): Promise<GalleryItem> {
  const req = await fetch(
    `https://storage.googleapis.com/storage/v1/b/${encodeURIComponent(
      data.bucket
    )}/o/${encodeURIComponent(data.name)}?alt=media`,
    {
      headers: { Accept: "image/*" },
      mode: "cors",
    }
  );
  const blob = await req.blob();
  const resized: Blob = await resizer.toBlob(blob, { max: 300 });

  const pathParts = data.name.split("/");
  const thumbFilename = relPath(
    data.name,
    "thumbnails/" + pathParts[pathParts.length - 1]
  );

  await queryApi(
    authData,
    "POST",
    `https://storage.googleapis.com/upload/storage/v1/b/${encodeURIComponent(
      data.bucket
    )}/o?${new URLSearchParams({
      name: thumbFilename,
      uploadType: "media",
    })}`,
    await resized.arrayBuffer(),
    { "Content-Type": resized.type }
  );
  const [size, resizedSize] = await Promise.all([
    getSize(blob),
    getSize(resized),
  ]);
  return {
    src: `https://storage.googleapis.com/${encodeURIComponent(data.bucket)}/${
      data.name
    }`,
    ...size,
    thumbnail: {
      src: `https://storage.googleapis.com/${encodeURIComponent(
        data.bucket
      )}/${thumbFilename}`,
      ...resizedSize,
    },
  };
}

// console.log(
//   relPath("/", "bar/foo.js"),
//   relPath("", "bar/foo.js"),
//   relPath("bar/", "foo.js"),
//   relPath("bar/baz.js", "foo.js")
// ); // all should print "bar/foo.js"
export function relPath(base: string, name: string) {
  if (name.startsWith("/"))
    throw new Error("Relative name isn't supposed to start with '/'");
  if (base === "/") base = "";
  const parts = base.split("/");
  return [...parts.slice(0, parts.length - 1), name].join("/");
}

export function throttledPromiseAll<T>(
  q: (() => Promise<T>)[],
  n: number
): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const running: Promise<void>[] = [];
    const results: T[] = [];
    let started = 0;
    let done = 0;
    let rejected = false;

    function scheduleNext(slot: number, i?: number, res?: T) {
      if (rejected) return;
      if (i !== undefined) {
        results[i] = res as T;
        if (++done === q.length) {
          resolve(results);
          return;
        }
      }
      if (started === q.length) {
        return;
      }
      const myStart = started++;
      running[slot] = q[myStart]()
        .then((res) => scheduleNext(slot, myStart, res))
        .catch((e) => {
          rejected = true;
          reject([myStart, e]);
        });
    }
    for (let j = 0; j < n; j++) {
      scheduleNext(j);
    }
  });
}
