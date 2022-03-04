<script lang='ts'>
  import { onMount } from "svelte"

  import type { Collection } from "../../../Repository/Base/collection"

  export let repository: Collection

  let collections = []
  const load = async () => {
    collections = await repository.list()
  }

  onMount(() => {
    load()
  })

</script>

<div id='WhishListsView' >

  <div>
    <h2> Colecciones </h2>
    {#each collections as collection}
      {collection.name}
    {/each}
  </div>

  <div>
    
  </div>

</div>

<style lang='scss' >
  #WhishListsView {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
</style>