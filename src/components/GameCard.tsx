import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import type { Games } from '../hooks/useGames'

interface Props {
  game: Games
}

export default function GameCard({ game }: Props): JSX.Element {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}
