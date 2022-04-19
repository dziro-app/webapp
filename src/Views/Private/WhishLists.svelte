<script lang='ts'>
  import { onMount } from "svelte"

  import type { CreateCollectionDto } from "dtos/Collection"
  import type { CreateItemDto } from "dtos/Item"

  import type { Collection as CollectionRepo } from "Repository/Base/collection"
  import type { Item as ItemRepo } from "Repository/Base/item"

  import Button from "dziro-components/src/Components/Button.svelte"
  import CollectionDetail from "dziro-components/src/Components/CollectionDetail.svelte"
  import CollectionButton from "dziro-components/src/Components/CollectionButton.svelte"
  import CollectionAddItem from "dziro-components/src/Components/CollectionAddItem.svelte"
  import CollectionItem from "dziro-components/src/Components/CollectionItem.svelte"

  import ItemModal from "../../modals/ItemExtended.svelte"
  import CollectionModal from "../../modals/Collection.svelte"

  import { collectionStore } from "../../Store/Collection"

  export let collectionRepo: CollectionRepo
  export let itemRepo: ItemRepo
  export let isUserFree: boolean = true

  let selectedColection: number | null = null
  
  // Flags for modals
  let showCreateModal = false
  let showEditModal = false
  let showAddItemModal = false

  const load = async () => {
    $collectionStore = await collectionRepo.list()
    if ( $collectionStore.length > 0) {
      selectedColection = 0
    }
  }

  const createCollection = async (data: CreateCollectionDto) => {
    try {
      const created = await collectionRepo.create(data)
      collectionStore.addCollection(created)
      showCreateModal = false
    }
    catch (e) {
      console.log(e)
    }
  }

  const editCollection = async(data: CreateCollectionDto) => {
    try {
      let current = $collectionStore[selectedColection]
      const updated = await collectionRepo.update(current.id, data)
      collectionStore.updateCollection(selectedColection, updated)
      showEditModal = false
    } catch (e) {
      console.log(e)
    }
  }

  const deleteCollection = async () => {
    const current = $collectionStore[selectedColection]

    try {
      await collectionRepo.delete(current.id)
      collectionStore.deleteCollection(current.id)
      if ( $collectionStore.length > 0) {
        selectedColection = 0
      }
    } catch (e) {
      console.log(e)
    }
  }

  const createItem = async (data: CreateItemDto) => {
    let current = $collectionStore[selectedColection]
    
    try {
      const newItem = await itemRepo.create(current.id, data)
      collectionStore.addItem(current.id, newItem)
      showAddItemModal = false  
    }
    catch (e) {
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
      defaultValues={$collectionStore[selectedColection]}
      onSubmit={editCollection}
      onClose={() => { showEditModal = false }} />
  {/if}

  {#if showAddItemModal}
    {#if isUserFree}
      <ItemModal
        onSubmit={createItem}
        onClose={() => { showAddItemModal = false }} />
    {/if}
  {/if}


  <div class='collectionList' >
    <h2> Colecciones </h2>
    <div class="buttonsList">
      {#each $collectionStore as collection, i}
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
      name={$collectionStore[selectedColection].name} 
      color={$collectionStore[selectedColection].color}
      emoji={$collectionStore[selectedColection].emoji}
      options={menuOptions}
    >
      <div class="itemList">
        {#each $collectionStore[selectedColection].items as item}
        <CollectionItem 
        image={item.image}
        name={item.title}
        price={item.price}
        website={item.website}
        />
        {/each}
        <CollectionAddItem on:click={()=>{ showAddItemModal = true }}  />
      </div>
    </CollectionDetail>

  {/if}

</div>

<style lang='scss' >
  @import '../../../node_modules/dziro-components/src/Styles/_texts.scss';
  @import '../../../node_modules/dziro-components/src/Styles/_colors.scss';
  @import '../../../node_modules/dziro-components/src/Styles/_sizing.scss';

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

    .itemList {
      display: flex;
      flex-wrap: wrap;
      grid-gap: sizing(2);
    }
  }
</style>