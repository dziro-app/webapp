import type {Item as ItemEntity} from "Entities/Item"
import type { CreateItemDto, UpdateItemDto } from "dtos/Item"

export interface Item {
  create: (collectionId: string, data: CreateItemDto) => Promise<ItemEntity>;
  toggleObtained: (itemId: string) => Promise<ItemEntity>;
  update: (id: string, data: UpdateItemDto) => Promise<ItemEntity>;
  delete: (id: string) => Promise<boolean>;
}