import '../node_modules/swiper/swiper-bundle.min.css'
import { Route, Routes } from 'react-router-dom'
import Main from './components/layout/Main'
import HomePage from './pages/HomePage'
import Banner from './components/banner/BannerList'
import MoviesPage from './pages/MoviesPage'
import MovieDetailPage from './components/movie/MovieDetailPage'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'
function App() {
  return (
    <>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <HomePage />
                </>
              }></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route path="/movie/:movieId" element={<MovieDetailPage />}></Route>
          </Route>
        </Routes>
      </SkeletonTheme>
    </>
  )
}

export default App
