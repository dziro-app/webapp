<script lang="ts">
  import { sessionStore } from "./Store/session"
  
  import Header from './components/Header.svelte'
  import WhishLists from './Views/WhishLists.svelte'
  import Landing from './Views/Public/Main.svelte'

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
    <WhishLists />
  {/if}
</main>

<style>
  :global(body, html) {
    padding: 0;
    margin: 0;
  }

</style>
