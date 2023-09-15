import { Box, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { GameQuery } from '../App'
import { Fragment } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

interface Props {
  gameQuery: GameQuery
}
export default function GameGrid({ gameQuery }: Props): JSX.Element {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6]
  const fetchGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0
  if (error) return <Text>{error.message}</Text>
  return (
    <Box>
      <InfiniteScroll
        loader={<Spinner />}
        dataLength={fetchGamesCount}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding='10px'>
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {games?.pages.map((page, i) => (
            <Fragment key={i}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  )
}
