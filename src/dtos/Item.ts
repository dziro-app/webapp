export type CreateItemDto = {
  title: string
  image: string
  website: string
  price: number
}


export type UpdateItemDto = {
  title?: string
  image?: string
  website?: string
  price?: number
}
