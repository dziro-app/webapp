export type CreateItemDto = {
  title: string
  image: string
  website: string
  price: string
}


export type UpdateItemDto = {
  title?: string
  image?: string
  website?: string
  price?: string
}
