import type { CreateCollectionDto, UpdateCollectionDto } from "dtos/Collection";
import type { Collection as CollectionEntity } from "Entities/MongoCollection";
import type { Collection } from "../Base/collection"
import { Fetch } from "./fetch";


export class CollectionRepo extends Fetch implements Collection {
  constructor(base: string, token: string) {
    super(base, token)
  }

  list = (): Promise<CollectionEntity[]> => {
    return this.get('/collection')
  }

  create = (data: CreateCollectionDto): Promise<CollectionEntity> => {
    return this.post('/collection', data)
  }
  
  update: (id: string, data: UpdateCollectionDto) => Promise<CollectionEntity>;
}