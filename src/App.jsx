import '../node_modules/swiper/swiper-bundle.min.css'
import { Route, Routes } from 'react-router-dom'
import Main from './components/layout/Main'
import HomePage from './pages/HomePage'
import Banner from './components/banner/BannerList'
import MoviesPage from './pages/MoviesPage'
function App() {
  return (
    <>
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
        </Route>
      </Routes>
    </>
  )
}

export default App
