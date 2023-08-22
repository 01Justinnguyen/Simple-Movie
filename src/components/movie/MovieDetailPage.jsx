import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { tmdbAPI, fetcher } from 'src/apiConfig/config'
import MovieMeta from './MovieMeta'
import Skeleton from 'react-loading-skeleton'
import MovieCreditsSkeleton from 'src/components/loading/MovieCreditsSkeleton'
import MovieTrailerSkeleton from 'src/components/loading/MovieTrailerSkeleton'

const MovieDetailPage = () => {
  const { movieId } = useParams()
  const [movieDetail, setMovieDetail] = useState({})
  const { data, error } = useSWR(tmdbAPI.getMovieDetail(movieId), fetcher)
  const isLoading = !data && !error
  useEffect(() => {
    if (data) setMovieDetail(data)
  }, [data])
  const { poster_path, title, backdrop_path, genres, overview } = movieDetail

  return (
    <>
      <div className="pb-10">
        {isLoading && (
          <>
            <div className="w-full h-[600px] relative">
              <Skeleton className="w-full h-full" />
            </div>

            <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
              <Skeleton className="object-cover w-full h-full rounded-xl" />
            </div>
          </>
        )}
        {!isLoading && (
          <>
            <div className="w-full h-[600px] relative">
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
          </>
        )}

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
        {isLoading && <MovieCreditsSkeleton />}
        {!isLoading && <MovieMeta movieId={movieId} type="credits" />}

        {isLoading && <MovieTrailerSkeleton />}
        {!isLoading && <MovieMeta movieId={movieId} type="videos" />}

        <MovieMeta movieId={movieId} type="similar" />
      </div>
    </>
  )
}

export default MovieDetailPage
