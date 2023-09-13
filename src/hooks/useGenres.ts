import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
interface Genres {
  id: number
  name: string
}

interface FetchGenres {
  count: number
  results: Genres[]
}
function useGenres() {
  const [genres, setGenres] = useState<Genres[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
    setIsLoading(true)
    apiClient
      .get<FetchGenres>('/genres', { signal: controller.signal })
      .then(({ data }) => {
        setGenres(data.results)

        setIsLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return

        setError(err.message)
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [])

  return { genres, error, isLoading }
}
export default useGenres
