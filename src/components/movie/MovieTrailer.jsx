import useSWR from 'swr'
import { fetcher, API_KEY } from '../../config'
function MovieTrailer({ movieId }) {
  const { data } = useSWR(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`, fetcher)
  if (!data) return null
  const { results } = data
  if (!results && results.length <= 0) return null
  console.log(results)
  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {results.slice(0, 2).map((item) => (
          <div className="" key={item.id}>
            <h3 className="inline-block p-3 mb-5 text-xl font-medium bg-secondary">{item.name}</h3>
            <div key={item.id} className="w-full aspect-video">
              <iframe
                className="object-fill w-full h-full"
                width="873"
                height="491"
                src={`https://www.youtube.com/embed/${item.key}`}
                title={item.type}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieTrailer
