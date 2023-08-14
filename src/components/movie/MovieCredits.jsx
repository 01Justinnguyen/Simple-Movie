import useSWR from 'swr'
import { fetcher, tmdbAPI } from '../../config'
function MovieCredits({ movieId }) {
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, 'credits'), fetcher)
  if (!data) return null
  const { cast } = data
  if (!cast || cast.length <= 0) return null
  return (
    <div className="py-10">
      <h2 className="mb-10 text-3xl text-center">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={item.profile_path ? tmdbAPI.imageOriginal(item.profile_path) : 'https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg?w=740'}
              className="w-full h-[350px] object-cover rounded-lg mb-3"
              alt=""
            />
            <h3 className="text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieCredits
