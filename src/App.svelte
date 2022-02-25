<script lang="ts">
  import type { User } from './Entities/Session';
  
  import Header from './components/Header.svelte'
  import WhishLists from './Views/WhishLists.svelte'
  import Landing from './Views/Landing.svelte'

  const session = null
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
