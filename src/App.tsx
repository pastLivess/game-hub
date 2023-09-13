import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import type { Genres } from './hooks/useGenres'
export default function App(): JSX.Element {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null)

  function handlerSelectGenre(genre: Genres) {
    setSelectedGenre(genre)
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
            <GenreList onSelectGenre={handlerSelectGenre} />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  )
}
