import { SimpleGrid, Text } from '@chakra-ui/react'
import Games from '../types/Games'
import DefinitionItem from './DefinitionItem'
import CriticScore from './CriticScore'

interface Props {
  game: Games
}
export default function GameAttributes({ game }: Props): JSX.Element {
  return (
    <SimpleGrid columns={2} as='dl'>
      <DefinitionItem term='Platforms'>
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='MetaScore'>
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term='Genres'>
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Publishers'>
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  )
}
