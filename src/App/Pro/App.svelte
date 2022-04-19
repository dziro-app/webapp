<script lang="ts">
  import { sessionStore } from "../../Store/session"
  
  import Header from "dziro-components/src/Components/Header.svelte"
  import Landing from '../../Views/Public/Main.svelte'
  import Private from "../../Views/Private/Main.svelte"


  let session = null

  $: {
    session = $sessionStore.user
  }
</script>

<main>
  {#if session === null}
    <Header />
    <Landing />
  {:else}
    <Header 
      username={session.username}
      picture={session.profilePicture}
    />
    <Private />
  {/if}
</main>

<style global lang="scss">
  @import "../../Styles/_gloabl.scss";
</style>

