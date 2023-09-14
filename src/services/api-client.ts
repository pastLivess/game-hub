import axios from 'axios'

export interface FetchResponse<T> {
  count: number
  results: T[]
}
export default axios.create({
  baseURL: `https://api.rawg.io/api`,
  params: {
    key: '1d0a990a04594e2e90a9d02d6cdc408a',
  },
})
