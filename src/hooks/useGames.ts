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
  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get<FetchGames>('/games', { signal: controller.signal })
      .then(({ data }) => setGames(data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })

    return () => controller.abort()
  }, [])

  return { games, error }
}
export default useGames
