import {} from 'react'
import useSWR from 'swr'
import { fetcher, tmdbAPI } from 'src/apiConfig/config'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import MovieCard from './MovieCard'
const MovieMeta = ({ movieId, type = 'videos' }) => {
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, type), fetcher)
  if (!data) return null
  if (type === 'credits') {
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
  } else {
    const { results } = data
    if (!results && results.length <= 0) return null
    if (type === 'videos') {
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

    if (type === 'similar') {
      return (
        <div className="py-10">
          <h2 className="mb-2 text-3xl font-medium">Similar Movies</h2>
          <div className="movie-list">
            <Swiper modules={[Navigation, Autoplay]} spaceBetween={50} slidesPerView={'auto'} navigation autoplay={{ delay: 2500, disableOnInteraction: false }}>
              {results.length > 0 &&
                results.map((movie) => (
                  <SwiperSlide key={movie.id}>
                    <MovieCard item={movie} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      )
    }
  }
  return null
}

export default MovieMeta
