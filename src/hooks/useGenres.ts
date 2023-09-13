import useData from './useData'

export interface Genres {
  id: number
  name: string
}

function useGenres() {
  return useData<Genres>('/genres')
}
export default useGenres
