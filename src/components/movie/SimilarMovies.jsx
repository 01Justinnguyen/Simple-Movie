import { useEffect, useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import useSWR from 'swr'
import { fetcher, tmdbAPI } from 'src/apiConfig/config'
import MovieCard from './MovieCard'
import { Navigation, Autoplay } from 'swiper/modules'
const SimilarMovies = ({ movieId }) => {
  const [similarMovies, setSimilarMovies] = useState([])
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, 'similar'), fetcher)

  useEffect(() => {
    if (data && data.results) setSimilarMovies(data?.results)
  }, [data])

  return (
    <div className="py-10">
      <h2 className="text-3xl font-mediummb-10">Similar Movies</h2>
      <div className="movie-list">
        <Swiper modules={[Navigation, Autoplay]} spaceBetween={50} slidesPerView={'auto'} navigation autoplay={{ delay: 2500, disableOnInteraction: false }}>
          {similarMovies.length > 0 &&
            similarMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard item={movie} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SimilarMovies
