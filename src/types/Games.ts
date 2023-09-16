import { Platform } from './Platform'

export interface Games {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  rating_top: number
  description_raw: string
  rating: number
  slug: string
}
