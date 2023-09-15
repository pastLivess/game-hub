import { useQuery } from '@tanstack/react-query'
import genres from '../data/genres'
import APIClient from '../services/api-client'
export interface Genres {
  id: number
  name: string
  image_background: string
}
const apiClient = new APIClient<Genres>(`/genres`)
function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  })
}
export default useGenres
