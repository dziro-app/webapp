import type { CreateCollectionDto, UpdateCollectionDto } from "dtos/Collection";
import type { Collection as CollectionEntity } from "Entities/MongoCollection";
import type { Collection } from "../Base/collection"

const storageKey = "Dziro"

export class CollectionRepo implements Collection {
  data: CollectionEntity[]
  
  constructor() {
    this.data = this.read()
  }

  read = () => {
    const savedData = localStorage.getItem(storageKey)
    if (savedData === null) return []
    return JSON.parse(savedData)
  }

  save = () => {
    localStorage.setItem(storageKey, JSON.stringify(this.data))
  }

  calculateId = () => {
    const length = this.data.length 
    if(length === 0) return 1
    const lastId = parseInt(this.data[length -1].id)
    return lastId + 1
  }

  list = (): Promise<CollectionEntity[]> => {
    return Promise.resolve(this.data.slice(0))
  }

  create = (data: CreateCollectionDto): Promise<CollectionEntity> => {
    const collection: CollectionEntity = {
      id: `${this.calculateId()}`,
      items: [],
      collaborators: [],
      ownerId: 0,
      createdAt: new Date(),
      ...data,
    } 
    this.data.push(collection)
    this.save()
    return Promise.resolve(collection)
  }
  
  update: (id: string, data: UpdateCollectionDto) => Promise<CollectionEntity>;
  
  delete = (id: string): Promise<boolean> => {
    const found = this.data.findIndex(item => (item.id == id))
    if (found != -1) {
      this.data.splice(found, 1)
      this.save()
      return Promise.resolve(true)
    }
    return Promise.reject("Not found")
  }

}