import type {Item as ItemEntity} from "Entities/Item"
import type { CreateItemDto } from "dtos/Item"

export interface Item {
  create: (collectionId: string, data: CreateItemDto) => Promise<ItemEntity>;
  delete: (id: string) => Promise<boolean>;
}