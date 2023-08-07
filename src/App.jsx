import { NavLink } from 'react-router-dom'
import MovieList from './components/movie/MovieList'

function App() {
  return (
    <>
      <header className="flex items-center justify-center py-10 mb-10 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movie</span>
      </header>

      <section className="banner h-[500px] page-container mb-20">
        <div className="relative w-full h-full rounded-lg">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img className="object-cover w-full h-full rounded-lg" src="https://d23.com/app/uploads/2019/04/1180w-600h_042419_avengers-endgame-need-to-know-780x440.jpg" alt="avenger" />
          <div className="absolute w-full left-5 bottom-5 text-white">
            <h2 className="font-bold text-3xl mb-5">Avenger: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-8">
              <span className="cursor-pointer hover:bg-primary transition-all py-2 px-4 border border-white rounded-md">Adventure</span>
              <span className="cursor-pointer hover:bg-primary transition-all py-2 px-4 border border-white rounded-md">Adventure</span>
              <span className="cursor-pointer hover:bg-primary transition-all py-2 px-4 border border-white rounded-md">Adventure</span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">Watch Now</button>
          </div>
        </div>
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-semibold">Now Playing</h2>
        <MovieList />
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-semibold">Top rated</h2>
        <MovieList type="top_rated" />
      </section>

      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-semibold">Trending</h2>
        <MovieList type="popular" />
      </section>
    </>
  )
}

export default App
