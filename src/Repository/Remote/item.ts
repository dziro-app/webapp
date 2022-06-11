import type { CreateItemDto, UpdateItemDto } from "dtos/Item";
import type {  Item as ItemEntity } from "Entities/Item";
import type { Item } from "../Base/item"
import { Fetch } from "./fetch";

const API_PATH = "/items"

export class ItemRepo extends Fetch implements Item {
  constructor(base: string, token: string) {
    super(base, token)
  }
  
  create = (collectionId: string, data: CreateItemDto) : Promise<ItemEntity> => {
    return this.post(`${API_PATH}/${collectionId}`, data)
  }
  
  toggleObtained = (itemId: string): Promise<ItemEntity> => {
    return this.patch(`${API_PATH}/${itemId}`, { obtained: true })
  }

  update = (id: string, data: UpdateItemDto) : Promise<ItemEntity> =>  {
    return this.patch(`${API_PATH}/${id}`, data)
  }

  delete = (id: string): Promise<boolean> => {
    return this.remove(`${API_PATH}/${id}`)
  };
}