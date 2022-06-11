import type { CreateCollectionDto, UpdateCollectionDto } from "dtos/Collection";
import type { Collection as CollectionEntity } from "Entities/MongoCollection";
import type { Collection } from "../Base/collection"
import { Fetch } from "./fetch";

const API_PATH = "/wishlists"
export class CollectionRepo extends Fetch implements Collection {
  constructor(base: string, token: string) {
    super(base, token)
  }
  
  list = (): Promise<CollectionEntity[]> => {
    return this.get(API_PATH)
  }
  
  create = (data: CreateCollectionDto): Promise<CollectionEntity> => {
    return this.post(API_PATH, data)
  }
  
  update = (id: string, data: UpdateCollectionDto): Promise<CollectionEntity> => {
    return this.patch(`/${API_PATH}/${id}`, data)
  }
  
  delete = (id: string): Promise<boolean> => {
    return this.remove(`/${API_PATH}/${id}`)
  }
}