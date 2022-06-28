<script lang="ts">
  import { onMount } from "svelte"

  import Header from "dziro-components/src/Components/Header.svelte"
  import Login from "../../Views/Public/Login.svelte"
  import Private from "../../Views/Private/Main.svelte"


  import {SessionRepo} from "../../Repository/Remote/session"
  import {ApiUrl} from "../../Repository/Remote"

  import { sessionStore } from "../../Store/session"


  let sessionRepo = new SessionRepo(ApiUrl)
  let session = null
  let timmer = null

  const continueOauth = async () => {
    let via = ""
    const query = new URLSearchParams(location.search);
    const code = query.get("code")
    const viaState = query.get("state")

    if (code && viaState) {
      if (viaState === "dzirospotify") {
        via = "spotify"
      }
      const res = await sessionRepo.getToken(via, code)
      sessionStore.setToken(res.access_token)
      sessionStore.setUser(res.user)
    }
  }

  onMount(() => {
    if ( location.search !== "") {
      continueOauth()
    }
  })

  $: {
    session = $sessionStore.user

    if (session && timmer === null) { 
      timmer =setInterval(async () => {
        let res = await sessionRepo.refreshToken()
        sessionStore.setToken(res.access_token)
      }, 1000 * 60 * 5)
    }
  }

</script>

<main>
  {#if session === null}
    <div class="Header">
      <Header />
      <Login repository={sessionRepo} />
    </div>
  {:else}
    <Header 
      username={session.username}
      picture={session.profile}
    />
    <Private />

  {/if}
</main>

<style global lang="scss">
  @import "../../Styles/_global.scss";
</style>

