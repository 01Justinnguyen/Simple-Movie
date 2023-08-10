import useSWR from 'swr'
import { fetcher } from '../../config'
function MovieCredits({ movieId }) {
  const { data } = useSWR(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5e6b78a5f9690b9cb75bb71bb40ab0b4`, fetcher)
  if (!data) return null
  const { cast } = data
  if (!cast || cast.length <= 0) return null
  return (
    <div className="py-10">
      <h2 className="mb-10 text-3xl text-center">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img src={`https://image.tmdb.org/t/p/original${item.profile_path}`} className="w-full h-[350px] object-cover rounded-lg mb-3" alt="" />
            <h3 className="text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieCredits
