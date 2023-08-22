import { useEffect, useState } from 'react'
import { fetcher, tmdbAPI } from 'src/apiConfig/config'
import MovieCard from 'src/components/movie/MovieCard'
import debounce from 'lodash.debounce'
import MovieCardSkeleton from 'src/components/loading/MovieCardSkeleton'
import Button from 'src/components/button/Button'
import useSWRInfinite from 'swr/infinite'
const itemsPerPage = 20
const MoviesPage = () => {
  const [page, setPage] = useState(1)
  const [inputValue, setInputValue] = useState('')
  const [url, setUrl] = useState(tmdbAPI.getTrendingMovies(page))

  //Handle load more cards
  const { data, error, size, setSize } = useSWRInfinite((index) => url.replace('page=1', `page=${index + 1}`), fetcher)
  const isEmpty = data?.[0]?.results.length === 0
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage)

  //handle skeleton
  const isLoading = !data && !error

  //initial data
  const movies = data ? data.reduce((a, b) => a.concat(b.results), []) : []

  //Handle search input
  const handleInputChange = (e) => setInputValue(e.target.value)
  const setFilterDebounce = debounce(handleInputChange, 500)
  useEffect(() => {
    if (inputValue) {
      setUrl(tmdbAPI.getMoviesSearch(inputValue, page))
    } else {
      setUrl(tmdbAPI.getTrendingMovies(page))
    }
  }, [inputValue, page])
  //End handle search input

  return (
    <div className="py-10">
      <div className="flex mb-10 max-w-[1000px] mx-auto">
        <div className="flex-1">
          <input type="text" className="w-full p-4 text-white outline-none bg-slate-800" placeholder="Type here to search..." onChange={setFilterDebounce} />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {isLoading && (
        <div className="grid grid-cols-4 gap-10">
          {new Array(20).fill(0).map((item, id) => (
            <MovieCardSkeleton key={id} />
          ))}
        </div>
      )}

      {!isLoading && <div className="grid grid-cols-4 gap-10">{movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} item={movie}></MovieCard>)}</div>}

      <div className="mt-10 text-center">
        <Button className={isReachingEnd ? 'cursor-not-allowed bg-opacity-70' : ''} onClick={() => (isReachingEnd ? {} : setSize(size + 1))} disabled={isReachingEnd}>
          LOAD MORE
        </Button>
      </div>
    </div>
  )
}

export default MoviesPage
