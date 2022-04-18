import UUID from "uuid-js"
import type {Item} from "../Base/item"

import type { CreateItemDto } from "dtos/Item"
import type { Item as ItemEntity } from "Entities/Item"

import LocalStorage from "./storage"


export class ItemRepo extends LocalStorage implements Item {
  create(collectionId: string, data: CreateItemDto) {
    const collections = this.read()
    const newItem: ItemEntity = {
      ...data,
      id:  UUID.create().toString(),
      createdAt: new Date()
    }
    const collectionIndex = this.findIndex(collectionId)
    collections[collectionIndex].items.push(newItem)
    this.save(collections)
    return Promise.resolve(newItem)
  }

  delete(id: string) {
    const collections = this.read()
    const found = this.findCollectionByItemId(id)
    collections[found.collectionIndex].splice(found.itemIndex, 1)
    this.save(collections)
    return Promise.resolve(true)
  }
}