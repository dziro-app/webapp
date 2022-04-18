<script lang='ts'>
  import { onMount } from "svelte"

  import type { CreateCollectionDto } from "dtos/Collection"
  import type { Collection } from "Entities/Collection"
  import type { Collection as CollectionRepo } from "Repository/Base/collection"

  import Button from "dziro-components/src/Components/Button.svelte"
  import CollectionDetail from "dziro-components/src/Components/CollectionDetail.svelte"
  import CollectionButton from "dziro-components/src/Components/CollectionButton.svelte"
  import CreateModal from "../../modals/NewCollection.svelte"

  export let repository: CollectionRepo

  let collections: Collection[] = []
  let selectedColection: Collection | null = null
  let showCreateModal = false

  const load = async () => {
    collections = await repository.list()
    if ( collections.length > 0) {
      selectedColection = collections[0]
    }
  }

  const closeModal = () => { showCreateModal = false}

  const createCollection = async (data: CreateCollectionDto) => {
    try {
      const created = await repository.create(data)
      const newCollection = collections.slice(0)
      newCollection.push(created)
      collections = newCollection
      closeModal()
    }
    catch (e) {
      console.log(e)
    }
  }

  const deleteCollection = async () => {
    try {
      await repository.delete(selectedColection.id)
      const newCollection = collections.slice(0)
      const found = newCollection.findIndex(item => (item.id === selectedColection.id))
      newCollection.splice(found, 1)
      collections = newCollection
      if ( collections.length > 0) {
        selectedColection = collections[0]
      }
    } catch (e) {
      console.log(e)
    }
  }

  const menuOptions = [{
    'display': 'Editar', 
    onClick: ()=>{ alert('Editar') }
  }, {
    'display': 'Eliminar', 
    onClick: deleteCollection
  }]


  onMount(() => {
    load()
  })

</script>

<div id='WhishListsView' >

  <CreateModal
    onSubmit={createCollection}
    onClose={closeModal} show={showCreateModal} />

  <div class='collectionList' >
    <h2> Colecciones </h2>
    <div class="buttonsList">
      {#each collections as collection}
        <CollectionButton 
          name={collection.name} 
          color={collection.color}
          emoji={collection.emoji}
          on:click={() => { selectedColection = collection }} />
      {/each}
      <div>
        <Button form="outline" on:click={() => showCreateModal=true} >
          Crear colección
        </Button>
      </div>
    </div>
  </div>

  {#if selectedColection !== null}
    <CollectionDetail 
      name={selectedColection.name} 
      color={selectedColection.color}
      emoji={selectedColection.emoji}
      options={menuOptions}
    />
  {/if}

</div>

<style lang='scss' >
  @import '../../../../components/src/Styles/_texts.scss';
  @import '../../../../components/src/Styles/_colors.scss';

  #WhishListsView {
    display: grid;
    grid-template-columns: 250px 1fr;
    height: calc(100vh - 80px);

    .collectionList {
      box-sizing: border-box;
      padding: 0 16px;
      h2 {
        @include title;
        color: $gray;
      }
      .buttonsList {
        text-align: center;
        display: grid;
        grid-row-gap: 16px;
        margin: 16px 0;
      }
    }
  }
</style>