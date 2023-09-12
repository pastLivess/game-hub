import { Grid, GridItem, Show } from '@chakra-ui/react'
export default function App(): JSX.Element {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}>
        <GridItem area='nav' bg='coral'>
          Nav
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' bg='gold'>
            Aside
          </GridItem>
        </Show>
        <GridItem area='main' bg='dodgerblue'>
          Main
        </GridItem>
      </Grid>
    </div>
  )
}
