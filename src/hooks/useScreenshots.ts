import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import { Screenshot } from '../types/Screenshot'

export default function useScreenshots(gameId: number) {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`)
  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll,
  })
}
