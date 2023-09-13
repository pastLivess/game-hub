import { GameQuery } from '../App'
import useData from './useData'

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Games {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

function useGames(gameQuery: GameQuery) {
  return useData<Games>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [
      gameQuery.genre?.id,
      gameQuery.platform?.id,
      gameQuery.sortOrder,
      gameQuery.searchText,
    ]
  )
}
export default useGames
