import { useInfiniteQuery } from '@tanstack/react-query'
import { GameQuery } from '../App'
import { Platform } from './usePlatforms'
import APIClient, { FetchResponse } from '../services/api-client'

export interface Games {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  rating_top: number
  rating: number
}

const apiClient = new APIClient<Games>(`/games`)
function useGames(gameQuery: GameQuery) {
  return useInfiniteQuery<FetchResponse<Games>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
    staleTime: 24 * 60 * 60 * 1000, // 24小时
  })
}
export default useGames
