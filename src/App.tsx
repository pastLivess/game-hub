import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import type { Genres } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import type { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

export interface GameQuery {
  genre: Genres | null
  platform: Platform | null
  sortOrder: string
  searchText: string
}

export default function App(): JSX.Element {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  function handlerSelectGenre(genre: Genres) {
    setGameQuery({ ...gameQuery, genre })
  }
  function handlerSelectedPlatform(platform: Platform) {
    setGameQuery({ ...gameQuery, platform })
  }
  function handlerSelectSortOrder(sortOrder: string) {
    setGameQuery({ ...gameQuery, sortOrder })
  }
  function handlerSearch(searchText: string) {
    setGameQuery({ ...gameQuery, searchText })
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
          <NavBar onSearch={handlerSearch} />
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
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={handlerSelectedPlatform}
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={handlerSelectSortOrder}
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  )
}
