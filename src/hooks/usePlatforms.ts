import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import APIClient from '../services/api-client'
import ms from 'ms'
import { Platform } from '../types/Platform'
const apiClient = new APIClient<Platform>(`/platforms/lists/parents`)
export default function usePlatforms() {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24 h
    initialData: platforms,
  })

  // useData<Platform>('/platforms/lists/parents')
}
