import useTrailers from '../hooks/useTrailers'
interface Props {
  gameId: number
}
export default function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailers(gameId)
  const first = data?.results[0]
  // console.log(data)

  if (isLoading) return null
  if (error) throw error
  return first ? (
    <video controls poster={first?.preview} src={first?.data[480]} />
  ) : null
}
