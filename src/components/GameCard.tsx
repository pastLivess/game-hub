import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import type { Games } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CiticScore from './CiticScore'
import GameCardContainer from './GameCardContainer'

interface Props {
  game: Games
}

export default function GameCard({ game }: Props): JSX.Element {
  return (
    <GameCardContainer>
      <Card>
        <Image src={game.background_image} />
        <CardBody>
          <HStack justifyContent='space-between' marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CiticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  )
}
