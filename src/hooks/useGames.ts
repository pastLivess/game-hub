import useData from './useData'

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Games {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
}

function useGames() {
  return useData<Games>('/games')
}
export default useGames
