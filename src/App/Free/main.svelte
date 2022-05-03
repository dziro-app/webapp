<script lang="ts" >
  import Header from "dziro-components/src/Components/Header.svelte"
  import WishList from  "../../Views/Private/WhishLists.svelte"
  import {CollectionRepo} from "../../Repository/LocalStorage/collection"
  import {ItemRepo} from "../../Repository/LocalStorage/item"
  import { FireBaseanalytics } from "../../Repository/Analytics"
  
  const aRepo = new FireBaseanalytics()
  const cRepo = new CollectionRepo()
  const iRepo = new ItemRepo()
</script>

<main>
  <Header />
  <WishList 
    analyticsRepo={aRepo}
    itemRepo={iRepo} 
    collectionRepo={cRepo} />
</main>

<style global lang="scss">
  @import "../../Styles/_global.scss";
</style>
