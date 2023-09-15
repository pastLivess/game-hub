import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'

interface GameHeading {
  gameQuery: GameQuery
}
export default function GameHeading({ gameQuery }: GameHeading): JSX.Element {
  const { data: genres } = useGenres()
  const { data: platforms } = usePlatforms()
  const platform = platforms?.results.find((p) => p.id === gameQuery.platformId)
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId)
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  )
}
