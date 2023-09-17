import { Genres } from './Genres'
import { Platform } from './Platform'
import { Publisher } from './Publisher'

export default interface Games {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  genres: Genres[]
  publishers: Publisher[]
  metacritic: number
  rating_top: number
  description_raw: string
  rating: number
  slug: string
}
