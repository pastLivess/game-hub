import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import type { Games } from '../types/Games'
import PlatformIconList from './PlatformIconList'
import CiticScore from './CiticScore'
import GameCardContainer from './GameCardContainer'
import Emoji from './Emoji'
import { Link } from 'react-router-dom'

interface Props {
  game: Games
}

export default function GameCard({ game }: Props): JSX.Element {
  return (
    <GameCardContainer>
      <Card _hover={{ transform: 'scale(1.03)' }}>
        <Image src={game.background_image} />
        <CardBody>
          <HStack justifyContent='space-between' marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CiticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize='2xl'>
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  )
}
