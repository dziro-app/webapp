import type {Collection as CollectionEntity} from "../../Entities/MongoCollection"
import type { CreateCollectionDto, UpdateCollectionDto } from "dtos/Collection"

export interface Collection {
  list: () => Promise<CollectionEntity[]>
  create: (data: CreateCollectionDto) => Promise<CollectionEntity>
  update: (id: string, data: UpdateCollectionDto) => Promise<CollectionEntity>
}