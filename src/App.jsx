import { NavLink } from 'react-router-dom'
import BannerList from './components/banner/BannerList'
import MovieList from './components/movie/MovieList'
import '../node_modules/swiper/swiper-bundle.min.css'

function App() {
  return (
    <>
      <header className="flex items-center justify-center py-10 mb-10 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movie</span>
      </header>

      {/* Banner */}
      <BannerList />
      {/* Banner */}

      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-semibold text-white capitalize">Now Playing</h2>
        <MovieList />
      </section>

      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-semibold text-white capitalize">Top rated</h2>
        <MovieList type="top_rated" />
      </section>

      <section className="pb-20 movies-layout page-container">
        <h2 className="mb-10 text-3xl font-semibold text-white capitalize">Trending</h2>
        <MovieList type="popular" />
      </section>
    </>
  )
}

export default App
