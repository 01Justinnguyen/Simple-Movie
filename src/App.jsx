import { lazy, Suspense } from 'react'
import '../node_modules/swiper/swiper-bundle.min.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { Route, Routes } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton'
import Main from './components/layout/Main'
import Page_404 from 'src/pages/Page_404'
// import HomePage from './pages/HomePage'
// import Banner from './components/banner/BannerList'
// import MoviesPage from './pages/MoviesPage'
// import MovieDetailPage from './components/movie/MovieDetailPage'

const HomePage = lazy(() => import('./pages/HomePage'))
const MoviesPageV2 = lazy(() => import('./pages/MoviesPageV2'))
const Banner = lazy(() => import('./components/banner/BannerList'))
const MovieDetailPage = lazy(() => import('./components/movie/MovieDetailPage'))

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
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
              <Route path="/movies" element={<MoviesPageV2 />}></Route>
              <Route path="/movie/:movieId" element={<MovieDetailPage />}></Route>
            </Route>
            <Route path="*" element={<Page_404 />} />
          </Routes>
        </SkeletonTheme>
      </Suspense>
    </>
  )
}

export default App
