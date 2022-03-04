import type { Collection as SingleCollection } from "./Collection"
import type { Item } from "./Item"
import type { Collaborator } from "./Collabotator"


export type Collection = SingleCollection & {
  collaborators: Collaborator[]
  items: Item[],
}