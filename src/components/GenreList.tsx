import useGenres from '../hooks/useGenres'

export default function GenreList(): JSX.Element {
  const { data: genres } = useGenres()
  console.log(genres)

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  )
}
