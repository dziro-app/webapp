<script lang="ts">
  import { sessionStore } from "../../Store/session"
  
  import Header from "../../components/Header.svelte"
  import Landing from '../../Views/Public/Main.svelte'
  import Private from "../../Views/Private/Main.svelte"


  let session = null

  $: {
    session = $sessionStore.user
  }
</script>

<main>
  <Header session={session} />
  {#if session === null}
    <Landing />
  {:else}
    <Private />
  {/if}
</main>

<style>
  :global(body, html) {
    padding: 0;
    margin: 0;
  }

</style>
