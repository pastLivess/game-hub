import { useQuery } from '@tanstack/react-query'
import { GameQuery } from '../App'
import apiClient, { FetchResponse } from '../services/api-client'
import { Platform } from './usePlatforms'

export interface Games {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  rating_top: number
  rating: number
}

function useGames(gameQuery: GameQuery) {
  return useQuery<FetchResponse<Games>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Games>>(`/games`, {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  })

  // useData<Games>(
  //   '/games',
  //   {
  //     params: {
  //       genres: gameQuery.genre?.id,
  //       platforms: gameQuery.platform?.id,
  //       ordering: gameQuery.sortOrder,
  //       search: gameQuery.searchText,
  //     },
  //   },
  //   [
  //     gameQuery.genre?.id,
  //     gameQuery.platform?.id,
  //     gameQuery.sortOrder,
  //     gameQuery.searchText,
  //   ]
  // )
}
export default useGames
