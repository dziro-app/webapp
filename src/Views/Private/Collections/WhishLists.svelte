<script lang='ts'>
  import { onMount } from "svelte"

  import type { Collection } from "../../../Repository/Base/collection"

  import Button from "../../../components/Button.svelte"
  import CreateModal from "../../../modals/NewCollection.svelte"

  export let repository: Collection

  let collections = []
  let showCreateModal = false
  const load = async () => {
    collections = await repository.list()
  }

  const closeModal = () => { showCreateModal = false}

  onMount(() => {
    load()
  })

</script>

<div id='WhishListsView' >

  <CreateModal onClose={closeModal} show={showCreateModal} />

  <div class='collectionList' >
    <h2> Colecciones </h2>
    <div class="buttonsList">
      {#each collections as collection}
        {collection.name}
      {/each}
      <Button form="outline" on:click={() => showCreateModal=true} >
        Crear colección
      </Button>
    </div>
  </div>

</div>

<style lang='scss' >

  @import '../../../Styles/_texts.scss';
  @import '../../../Styles/_colors.scss';
  #WhishListsView {
    display: grid;
    grid-template-columns: 250px 1fr;

    .collectionList {
      box-sizing: border-box;
      padding: 0 16px;
      h2 {
        @include title;
        color: $gray;
      }
      .buttonsList {
        text-align: center;
      }
    }
  }
</style>