import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { fetcher, tmdbAPI } from 'src/apiConfig/config'
import MovieCard from 'src/components/movie/MovieCard'
import debounce from 'lodash.debounce'
import ReactPaginate from 'react-paginate'
import MovieCardSkeleton from 'src/components/loading/MovieCardSkeleton'
const MoviesPage = () => {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [inputValue, setInputValue] = useState('')
  const [url, setUrl] = useState(tmdbAPI.getTrendingMovies(page))
  const { data, error } = useSWR(url, fetcher)
  const isLoading = !data && !error

  useEffect(() => {
    if (data && data.results) setMovies(data?.results)
    if (data && data.total_pages) setTotalPages(data?.total_pages)
    if (data && data.page) setPage(data?.page)
  }, [data])

  const handleInputChange = (e) => setInputValue(e.target.value)
  const setFilterDebounce = debounce(handleInputChange, 500)
  useEffect(() => {
    if (inputValue) {
      setUrl(tmdbAPI.getMoviesSearch(inputValue, page))
    } else {
      setUrl(tmdbAPI.getTrendingMovies(page))
    }
  }, [inputValue, page])
  const pageCount = Number.parseInt(totalPages)
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setPage(event.selected + 1)
  }
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

      {/* Pagination */}
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
      {/* End Pagination */}
    </div>
  )
}

export default MoviesPage
