import type { Collection as CollectionEntity } from "Entities/MongoCollection";
const storageKey = "Dziro"


type FoundCollectionByItemId = {
  collectionIndex: number,
  itemIndex: number
}

export default class LocalStorage {
  read = () => {
    const savedData = localStorage.getItem(storageKey)
    if (savedData === null) return []
    return JSON.parse(savedData)
  }

  save = (data: CollectionEntity[]) => {
    localStorage.setItem(storageKey, JSON.stringify(data))
  }

  findIndex = (id: string) => {
    const collections = this.read()

    const found = collections.findIndex(item => (item.id == id))
    if (found != -1) return found
    throw new Error("Not found")
  }

  findCollectionByItemId = (itemId: string): FoundCollectionByItemId => {
    const collections = this.read()
    let itemIndex = -1

    const collectionIndex = collections.findIndex(collection => {
      itemIndex = collection.items.findIndex(item => item.id = itemId)
      return (itemIndex !== -1)
    })

    if (collectionIndex != -1) return {collectionIndex, itemIndex}
    throw new Error("Not found")
  }
}