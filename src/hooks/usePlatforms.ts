import { useQuery } from '@tanstack/react-query'
import apiClient, { FetchResponse } from '../services/api-client'
import platforms from '../data/platforms'

interface Platform {
  id: number
  name: string
  slug: string
}
export default function usePlatforms() {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>(`/platforms/lists/parents`)
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 h
    initialData: { count: platforms.count, results: platforms.results },
  })

  // useData<Platform>('/platforms/lists/parents')
}
