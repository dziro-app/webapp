import type { Item } from "./Item"

export type Collection = {
  id: string
  name: string
  color: string
  emoji: string
  ownerId: number
  items: Item[],
  createdAt: Date
}