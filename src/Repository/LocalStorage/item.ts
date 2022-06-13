import UUID from "uuid-js"
import type {Item} from "../Base/item"

import type { CreateItemDto, UpdateItemDto } from "dtos/Item"
import type { Item as ItemEntity } from "Entities/Item"

import LocalStorage from "./storage"


export class ItemRepo extends LocalStorage implements Item {
  create(collectionId: string, data: CreateItemDto): Promise<ItemEntity> {
    const collections = this.read()
    const newItem: ItemEntity = {
      ...data,
      price: parseInt(data.price, 10),
      obtained: false,
      id:  UUID.create().toString(),
      createdAt: new Date()
    }
    const collectionIndex = this.findIndex(collectionId)
    collections[collectionIndex].items.push(newItem)
    this.save(collections)
    return Promise.resolve(newItem)
  }

  update(id: string, data: UpdateItemDto): Promise<ItemEntity> {
    const collections = this.read()
    const found = this.findCollectionByItemId(id)
    let item = collections[found.collectionIndex].items[found.itemIndex] as ItemEntity
    item = {
      ...item,
      ...data,
      price: parseInt(data.price, 10),
    }

    collections[found.collectionIndex].items[found.itemIndex] = item
    this.save(collections)
    return Promise.resolve(item)
  }


  toggleObtained(itemId: string): Promise<ItemEntity> {
    const collections = this.read()
    const found = this.findCollectionByItemId(itemId)
    const item = collections[found.collectionIndex].items[found.itemIndex] as ItemEntity
    item.obtained = !item.obtained
    this.save(collections)
    return Promise.resolve(item)

  }

  delete(id: string): Promise<boolean> {
    const collections = this.read()
    const found = this.findCollectionByItemId(id)
    collections[found.collectionIndex].items.splice(found.itemIndex, 1)
    this.save(collections)
    return Promise.resolve(true)
  }
}