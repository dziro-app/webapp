<script lang="ts" >
  import Header from "dziro-components/src/Components/Header.svelte"
  import WishList from  "../../Views/Private/WhishLists.svelte"
  import {CollectionRepo} from "../../Repository/LocalStorage/collection"
  import {ItemRepo} from "../../Repository/LocalStorage/item"

  const cRepo = new CollectionRepo()
  const iRepo = new ItemRepo()
</script>

<main>
  <Header />
  <WishList itemRepo={iRepo} collectionRepo={cRepo} />
</main>

<style>
  :global(body, html) {
    padding: 0;
    margin: 0;
  }

</style>
