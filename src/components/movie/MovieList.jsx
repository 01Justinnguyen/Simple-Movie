import React, { useEffect, useState } from 'react'
import '../../../node_modules/swiper/swiper-bundle.min.css'
import MovieCard from './MovieCard'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import useSWR from 'swr'
import { fetcher } from '../../config'
const MovieList = ({ type = 'now_playing' }) => {
  const [movies, setMovies] = useState([])
  const { data, error, isLoading } = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=5e6b78a5f9690b9cb75bb71bb40ab0b4`, fetcher)

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
