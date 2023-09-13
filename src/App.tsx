import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import type { Genres } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import type { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'

export interface GameQuery {
  genre: Genres | null
  platform: Platform | null
}

export default function App(): JSX.Element {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  function handlerSelectGenre(genre: Genres) {
    setGameQuery({ ...gameQuery, genre })
  }
  function handlerSelectedPlatform(platform: Platform) {
    setGameQuery({ ...gameQuery, platform })
  }
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}>
        <GridItem area='nav'>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={handlerSelectGenre}
            />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={handlerSelectedPlatform}
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  )
}
