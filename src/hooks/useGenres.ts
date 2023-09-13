import genres from '../data/genres'

export interface Genres {
  id: number
  name: string
  image_background: string
}

function useGenres() {
  return { data: genres, isLoading: false, error: null }
}
export default useGenres
