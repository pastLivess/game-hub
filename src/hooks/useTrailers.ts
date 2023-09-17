import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import { Trailer } from '../types/Trailer'

export default function useTrailers(gameId: number) {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`)
  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
  })
}
