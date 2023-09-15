import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import usePlatform from '../hooks/usePlatform'
import useGenre from '../hooks/useGenre'

interface GameHeading {
  gameQuery: GameQuery
}
export default function GameHeading({ gameQuery }: GameHeading): JSX.Element {
  const genre = useGenre(gameQuery.genreId)
  const platform = usePlatform(gameQuery.platformId)
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  )
}
