<script lang="ts">
  import { Router, Route } from "svelte-navigator"

  import { sessionStore } from "./Store/session"

  import Header from "dziro-components/src/Components/Header.svelte"
  import Landing from "./Views/Public/Landing/Main.svelte"
  import Oauth from "./Views/Public/Oauth.svelte"
  import Login from "./Views/Public/Login.svelte"
  import Private from "./Views/Private/Main.svelte"


  import { FireBaseanalytics } from "./Repository/Analytics"
  import { SessionRepo } from "./Repository/Remote/session"
  import { ApiUrl } from "./Repository/Remote"

  const fs = new FireBaseanalytics()
  const sessionRepo = new SessionRepo(ApiUrl)
  let session = null
  let timmer = null

  $: {
    console.log($sessionStore.user)
    session = $sessionStore.user

    if (session && timmer === null) { 
      timmer =setInterval(async () => {
        let res = await sessionRepo.refreshToken()
        sessionStore.setToken(res.access_token)

        console.log(res)
      }, 1000 * 60 * 5)
    }
  }

</script>
<main>

  {#if session === null}
    <div class="Header">
      <Header />
    </div>
  {:else}
    <Header 
      username={session.username}
      picture={session.profile}
    />
  {/if}

  <Router>
    <Route path="/auth/:via/callback">
      <Oauth repository={sessionRepo} />
    </Route>
    <Route path="/login" >
      <Login repository={sessionRepo} />
    </Route> 
    <Route path="/" >
      {#if session === null}
        <Landing analyticsRepo={fs} />
      {:else}
        <Private />
      {/if}
    </Route> 
  </Router>

</main>

<style global lang="scss">
  @import "./Styles/_global.scss";
  .Header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
  }
</style>

