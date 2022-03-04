export type CreateCollectionDto = {
  name: string
  color: string
  emoji: string
}

export type UpdateCollectionDto = {
  name?: string
  color?: string
  emoji?: string
}