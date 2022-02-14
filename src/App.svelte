<script lang="ts">
  import "@fontsource/material-icons";
  import { onMount, setContext } from "svelte";

  import { writable, Writable } from "svelte/store";
  import Creator from "./Creator.svelte";
  import type { AuthData } from "./utils";

  let authStatus: Writable<null | "waiting" | AuthData> = writable(null);

  setContext("authStatus", authStatus);

  async function login() {
    try {
      if ($authStatus !== null) return;
      $authStatus = "waiting";
      const redirect_uri = new URL(document.location.href);
      redirect_uri.search = "";
      redirect_uri.hash = "";
      redirect_uri.pathname = import.meta.env.BASE_URL + "callback.html";
      const state = Math.random().toString();
      const params = new URLSearchParams({
        client_id: import.meta.env.VITE_G_CLIENTID as string,
        redirect_uri: redirect_uri.toString(),
        response_type: "token",
        scope:
          "https://www.googleapis.com/auth/devstorage.read_only https://www.googleapis.com/auth/devstorage.read_write https://www.googleapis.com/auth/cloudplatformprojects.readonly",
        state,
      });
      const authWindow = window.open(
        "https://accounts.google.com/o/oauth2/v2/auth?" + params.toString(),
        "GoogleLoginPopup",
        "popup"
      );
      if (authWindow === null)
        throw new Error("Failed to obtain a reference to auth window");
      let done = false;
      $authStatus = await Promise.race([
        new Promise<AuthData>(async (resolve) => {
          const listener = ({ data }: MessageEvent) => {
            const parsed = JSON.parse(data);
            if (parsed.state === state) {
              delete parsed.state;
              const expiry = new Date();
              expiry.setSeconds(
                expiry.getSeconds() + parseInt(parsed.expires_in)
              );
              parsed.expires_at = expiry;
              delete parsed.expires_in;
              resolve(parsed);
              window.removeEventListener("message", listener);
            }
          };
          window.addEventListener("message", listener);
        }),
        new Promise<never>((_, reject) => {
          const loop = () => {
            if (done) return;
            if (authWindow.closed) {
              reject();
            } else {
              setTimeout(loop, 500);
            }
          };
          loop();
        }),
      ]).finally(() => {
        done = true;
        authWindow.close();
      });
    } catch (e) {
      $authStatus = null;
    }
  }

  function logout() {
    if ($authStatus === null || $authStatus === "waiting") return;
    const token = $authStatus.access_token;
    $authStatus = null;
    fetch("https://oauth2.googleapis.com/revoke", {
      method: "POST",
      body: new URLSearchParams({ token }),
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    });
  }

  onMount(() => {
    const initialVal = JSON.parse(
      localStorage.getItem("gcs-gallery-auth") ?? "null"
    );
    authStatus.set(
      initialVal === "waiting" ||
        (initialVal !== null && new Date() > new Date(initialVal.expires_at))
        ? null
        : initialVal
    );

    const unsub = authStatus.subscribe((val) => {
      localStorage.setItem("gcs-gallery-auth", JSON.stringify(val));
    });
    const listener = () =>
      authStatus.set(
        JSON.parse(localStorage.getItem("gcs-gallery-auth") ?? "null")
      );
    window.addEventListener("storage", listener);

    return () => {
      unsub();
      window.removeEventListener("storage", listener);
    };
  });
</script>

{#if $authStatus === null}
  <p>
    <button on:click={login}>Log in with Google</button>
  </p>
{:else if $authStatus === "waiting"}
  <p>Please authenticate in the popup</p>
{:else}
  <p>
    <button on:click={logout}>Log out</button>
  </p>
  <Creator />
{/if}

<footer>
  <p>
    gcs-gallery: &copy; 2022 Matěj Volf. <a
      href="https://github.com/mvolfik/gcs-gallery">View source on GitHub</a
    >.
  </p>
</footer>
