import { useQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'
import { Games } from '../types/Games'

const apiClient = new APIClient<Games>('/games')
export default function useGame(slug: string) {
  return useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
  })
}
