import { useQuery } from '@tanstack/react-query'
import apiClient, { FetchResponse } from '../services/api-client'
import genres from '../data/genres'
export interface Genres {
  id: number
  name: string
  image_background: string
}

function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genres>>('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  })
}
export default useGenres
