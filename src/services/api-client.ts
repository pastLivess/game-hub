import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
  count: number
  next: string | null
  results: T[]
}
const axiosInstance = axios.create({
  baseURL: `https://api.rawg.io/api`,
  params: {
    key: '1d0a990a04594e2e90a9d02d6cdc408a',
  },
})

class APIClient<T> {
  endpoint: string
  constructor(endpoint: string) {
    this.endpoint = endpoint
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data)
  }
}
export default APIClient
