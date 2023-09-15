import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

export default function App(): JSX.Element {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  /* 
  function handlerSelectGenre(genre: Genres) {
    setGameQuery({ ...gameQuery, genreId: genre.id })
  }
  function handlerSelectedPlatform(platform: Platform) {
    setGameQuery({ ...gameQuery, platformId: platform.id })
  }
  function handlerSelectSortOrder(sortOrder: string) {
    setGameQuery({ ...gameQuery, sortOrder })
  }
  function handlerSearch(searchText: string) {
    setGameQuery({ ...gameQuery, searchText })
  } */
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
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <Box paddingLeft={2}>
            <GameHeading />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  )
}
