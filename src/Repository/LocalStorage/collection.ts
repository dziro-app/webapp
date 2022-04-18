import type { CreateCollectionDto, UpdateCollectionDto } from "dtos/Collection";
import type { Collection as CollectionEntity } from "Entities/MongoCollection";
import UUID from "uuid-js"

import type { Collection } from "../Base/collection"

import LocalStorage from "./storage"

export class CollectionRepo extends LocalStorage implements Collection {

  list = (): Promise<CollectionEntity[]> => {
    const collections = this.read()
    return Promise.resolve(collections.slice(0))
  }

  create = (data: CreateCollectionDto): Promise<CollectionEntity> => {
    const collections = this.read()
    const collection: CollectionEntity = {
      id: UUID.create().toString(),
      items: [],
      collaborators: [],
      ownerId: 0,
      createdAt: new Date(),
      ...data,
    } 
    collections.push(collection)
    this.save(collections)
    return Promise.resolve(collection)
  }
  
  update= (id: string, data: UpdateCollectionDto): Promise<CollectionEntity> => {
    const collections = this.read()
    const found = this.findIndex(id)
    let updated:CollectionEntity = {
      ...collections[found],
      ...data
    }
    collections[found] = updated
    this.save(collections)
    return Promise.resolve(updated)
  }
  
  delete = (id: string): Promise<boolean> => {
    const collections = this.read()

    const found = this.findIndex(id)
    collections.splice(found, 1)
    this.save(collections)
    return Promise.resolve(true)
   
  }



}