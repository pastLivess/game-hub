import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface GameHeading {
  gameQuery: GameQuery
}
export default function GameHeading({ gameQuery }: GameHeading): JSX.Element {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  )
}
