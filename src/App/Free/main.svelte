<script lang="ts" >
  import Header from "dziro-components/src/Components/Header.svelte"
  import WishList from  "../../Views/Private/WhishLists.svelte"
  import {CollectionRepo} from "../../Repository/LocalStorage/collection"
  
  const repo = new CollectionRepo()
</script>

<main>
  <Header />
  <WishList repository={repo} />
</main>

<style>
  :global(body, html) {
    padding: 0;
    margin: 0;
  }

</style>
