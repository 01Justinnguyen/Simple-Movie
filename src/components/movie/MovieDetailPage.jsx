import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { fetcher, tmdbAPI } from 'apiConfig/config'
import MovieCredits from './MovieCredits'
import MovieTrailer from './MovieTrailer'
import SimilarMovies from './SimilarMovies'

const MovieDetailPage = () => {
  const { movieId } = useParams()
  const [movieDetail, setMovieDetail] = useState({})
  const { data } = useSWR(tmdbAPI.getMovieDetail(movieId), fetcher)
  useEffect(() => {
    if (data) setMovieDetail(data)
  }, [data])
  const { poster_path, title, backdrop_path, genres, overview } = movieDetail

  return (
    <div className="pb-10">
      <div className="w-full h-[600px] relative ">
        <div className="overlay"></div>
        <div
          className="w-full h-full bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdbAPI.imageOriginal(backdrop_path)})`
          }}></div>
      </div>

      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img className="object-cover w-full h-full rounded-xl" src={poster_path ? tmdbAPI.imageOriginal(poster_path) : 'https://placehold.co/600x400/png'} alt={title} />
      </div>

      <h1 className="mb-10 text-3xl font-bold text-center text-white">{title}</h1>
      {genres && genres.length > 0 && (
        <div className="flex items-center justify-center mb-10 gap-x-5">
          {genres.map((item) => (
            <span className="px-4 py-2 transition-all border rounded cursor-pointer hover:bg-primary hover:text-white border-primary text-primary" key={item.id}>
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">{overview}</p>
      <MovieCredits movieId={movieId} />
      <MovieTrailer movieId={movieId} />
      <SimilarMovies movieId={movieId} />
    </div>
  )
}

export default MovieDetailPage
