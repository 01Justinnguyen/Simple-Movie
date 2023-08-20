import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import useSWR from 'swr'
import { tmdbAPI, fetcher } from 'src/apiConfig/config'
import PropTypes from 'prop-types'
import { withErrorBoundary } from 'react-error-boundary'

const MovieList = ({ type = 'now_playing' }) => {
  const [movies, setMovies] = useState([])
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher)
  const isLoading = !data && !error
  useEffect(() => {
    if (data && data.results) setMovies(data?.results)
  }, [data])
  return (
    <div className="movie-list">
      <Swiper modules={[Navigation, Autoplay]} spaceBetween={50} slidesPerView={'auto'} navigation autoplay={{ delay: 2500, disableOnInteraction: false }}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard isLoading={isLoading} item={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

MovieList.propTypes = {
  type: PropTypes.string.isRequired
}
// eslint-disable-next-line react-refresh/only-export-components
const FallbackComponent = () => {
  return <p className="text-red-400 bg-red-50">Something when wrong</p>
}
// eslint-disable-next-line react-refresh/only-export-components
export default withErrorBoundary(MovieList, {
  FallbackComponent
})
