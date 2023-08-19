import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import useSWR from 'swr'
import { tmdbAPI, fetcher } from 'src/apiConfig/config'
const MovieList = ({ type = 'now_playing' }) => {
  const [movies, setMovies] = useState([])
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher)
  useEffect(() => {
    if (data && data.results) setMovies(data?.results)
  }, [data])
  return (
    <div className="movie-list">
      <Swiper modules={[Navigation, Autoplay]} spaceBetween={50} slidesPerView={'auto'} navigation autoplay={{ delay: 2500, disableOnInteraction: false }}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard item={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default MovieList
