import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

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

interface FetchGames {
  count: number
  description: string
  next: string
  results: Array<Games>
}
function useGames() {
  const [games, setGames] = useState<Games[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(true)
    apiClient
      .get<FetchGames>('/games', { signal: controller.signal })
      .then(({ data }) => {
        setGames(data.results)

        setIsLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return

        setError(err.message)
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [])

  return { games, error, isLoading }
}
export default useGames
