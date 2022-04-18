import { writable } from 'svelte/store'

import type { Item } from "../Entities/Item"
import type { Collection } from '../Entities/Collection'


const defaultState:Collection [] = []

function createCollection() {
	const { subscribe, set, update } = writable(defaultState);

	return {
		subscribe,
    set: (initial: Collection[]) => update(() => {
      return initial
    }),
    addCollection: (created: Collection) => update(collections => {
      const newCollection = collections.slice(0)
      newCollection.push(created)
      return newCollection
    }),
    updateCollection: (index: number, updated: Collection) => update(collections => {
      const updatedCollections = collections.slice(0)
      updatedCollections[index] = updated
      return updatedCollections
    }),
    deleteCollection: (id: string) => update(collections => {
      const newCollection = collections.slice(0)
      const found = newCollection.findIndex(item => (item.id === id))
      newCollection.splice(found, 1)
      return newCollection
    }),
		reset: () => set(defaultState),
    addItem: (collectionId: string, item: Item) => update(collections => {
      const newCollection = collections.slice(0)
      const found = newCollection.findIndex(collection => (collection.id === collectionId))
      newCollection[found].items.push(item)
      return newCollection
    })
	};
}

export const collectionStore = createCollection();