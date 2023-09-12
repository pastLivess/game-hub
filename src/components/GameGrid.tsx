import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'
interface Games {
  id: number
  name: string
}

interface FetchGames {
  count: number
  description: string
  next: string
  results: Array<Games>
}

export default function GameGrid(): JSX.Element {
  const [games, setGames] = useState<Games[]>([])
  const [error, setError] = useState('')
  useEffect(() => {
    apiClient
      .get<FetchGames>('/games')
      .then(({ data }) => setGames(data.results))
      .catch((err) => setError(err.message))
  }, [])
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}
