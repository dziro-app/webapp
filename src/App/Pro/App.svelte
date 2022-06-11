<script lang="ts">

  import { sessionStore } from "../../Store/session"
  
  import Header from "dziro-components/src/Components/Header.svelte"
  import Login from "../../Views/Public/Login.svelte"
  import Private from "../../Views/Private/Main.svelte"

  import {SessionRepo} from "../../Repository/Remote/session"
  import {ApiUrl} from "../../Repository/Remote"


  let session = null

  let sessionRepo = new SessionRepo(ApiUrl)

  $: {
    console.log($sessionStore.user)
    session = $sessionStore.user
  }
</script>

<main>

  {#if session === null}
    <p>not logged</p>
    <Header />
    <Login repository={sessionRepo} />
  {:else}
    <p>login</p>
    <Header 
      username={session.username}
      picture={session.profile}
    />
    <!-- <Private /> -->
  {/if}
</main>

<style global lang="scss">
  @import "../../Styles/_global.scss";
</style>

