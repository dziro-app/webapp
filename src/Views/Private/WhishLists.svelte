<script lang='ts'>
  import { onMount } from "svelte"

  import type { CreateCollectionDto } from "dtos/Collection"
  import type { Collection } from "Entities/Collection"
  import type { Collection as CollectionRepo } from "Repository/Base/collection"

  import Button from "dziro-components/src/Components/Button.svelte"
  import CollectionDetail from "dziro-components/src/Components/CollectionDetail.svelte"
  import CollectionButton from "dziro-components/src/Components/CollectionButton.svelte"
  import CollectionAddItem from "dziro-components/src/Components/CollectionAddItem.svelte"

  import ItemModal from "../../modals/ItemExtended.svelte"
  import CollectionModal from "../../modals/Collection.svelte"

  export let repository: CollectionRepo
  export let isUserFree: boolean = true

  let collections: Collection[] = []
  let selectedColection: number | null = null
  
  // Flags for modals
  let showCreateModal = false
  let showEditModal = false
  let showAddItemModal = false

  const load = async () => {
    collections = await repository.list()
    if ( collections.length > 0) {
      selectedColection = 0
    }
  }

  const createCollection = async (data: CreateCollectionDto) => {
    try {
      const created = await repository.create(data)
      const newCollection = collections.slice(0)
      newCollection.push(created)
      collections = newCollection
      showCreateModal = false
    }
    catch (e) {
      console.log(e)
    }
  }

  const editCollection = async(data: CreateCollectionDto) => {
    try {
      let current = collections[selectedColection]
      const updated = await repository.update(current.id, data)
      const updatedCollections = collections.slice(0)
      updatedCollections[selectedColection] = updated
      collections = updatedCollections
      showEditModal = false
    } catch (e) {
      console.log(e)
    }
  }

  const deleteCollection = async () => {
    const current = collections[selectedColection]

    try {
      await repository.delete(current.id)
      const newCollection = collections.slice(0)
      const found = newCollection.findIndex(item => (item.id === current.id))
      newCollection.splice(found, 1)
      collections = newCollection
      if ( collections.length > 0) {
        selectedColection = 0
      }
    } catch (e) {
      console.log(e)
    }
  }

  const menuOptions = [{
    'display': 'Editar', 
    onClick: ()=>{ showEditModal = true }
  }, {
    'display': 'Eliminar', 
    onClick: deleteCollection
  }]

  onMount(() => {
    load()
  })

</script>

<div id='WhishListsView' >

  {#if showCreateModal}
    <CollectionModal
      defaultValues={null}
      onSubmit={createCollection}
      onClose={() => { showCreateModal = false }} />
  {/if}

  {#if showEditModal}
    <CollectionModal
      submitText="GUARDAR"
      title="Editar colección"
      defaultValues={collections[selectedColection]}
      onSubmit={editCollection}
      onClose={() => { showEditModal = false }} />
  {/if}

  {#if showAddItemModal}
    {#if isUserFree}
      <ItemModal onClose={() => { showAddItemModal = false }} />
    {/if}
  {/if}


  <div class='collectionList' >
    <h2> Colecciones </h2>
    <div class="buttonsList">
      {#each collections as collection, i}
        <CollectionButton 
          name={collection.name} 
          color={collection.color}
          emoji={collection.emoji}
          on:click={() => { selectedColection = i }} />
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
      name={collections[selectedColection].name} 
      color={collections[selectedColection].color}
      emoji={collections[selectedColection].emoji}
      options={menuOptions}
    >
      <CollectionAddItem on:click={()=>{ showAddItemModal = true }}  />
    </CollectionDetail>

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