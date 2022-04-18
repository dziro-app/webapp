import type { Item } from "./Item"

export type Collection = {
  id: number
  name: string
  color: string
  emoji: string
  ownerId: number
  items: Item[],
  createdAt: Date
}