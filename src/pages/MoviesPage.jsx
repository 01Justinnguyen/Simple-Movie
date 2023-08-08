import React, { useEffect, useState } from 'react'
import MovieList from '../components/movie/MovieList'
import useSWR from 'swr'
import { fetcher } from '../config'
import MovieCard from '../components/movie/MovieCard'
const MoviesPage = () => {
  const [movies, setMovies] = useState([])
  const { data } = useSWR(`https://api.themoviedb.org/3/trending/all/day?api_key=5e6b78a5f9690b9cb75bb71bb40ab0b4`, fetcher)

  useEffect(() => {
    if (data && data.results) setMovies(data?.results)
  }, [data])

  console.log(data)

  return (
    <div className="py-10">
      <div className="flex mb-10 max-w-[1000px] mx-auto">
        <div className="flex-1">
          <input type="text" className="w-full p-4 text-white outline-none bg-slate-800" placeholder="Type here to search..." />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">{movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} item={movie}></MovieCard>)}</div>
    </div>
  )
}

export default MoviesPage
