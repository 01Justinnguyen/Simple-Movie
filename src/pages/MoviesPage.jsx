import React, { useEffect, useState } from 'react'
import MovieList from '../components/movie/MovieList'
import useSWR from 'swr'
import { fetcher, API_KEY } from '../config'
import MovieCard from '../components/movie/MovieCard'
import debounce from 'lodash.debounce'
import ReactPaginate from 'react-paginate'
const MoviesPage = () => {
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [inputValue, setInputValue] = useState('')
  // const [itemOffset, setItemOffset] = useState(0)
  const [url, setUrl] = useState(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`)
  const { data } = useSWR(url, fetcher)

  useEffect(() => {
    if (data && data.results) setMovies(data?.results)
    if (data && data.total_pages) setTotalPages(data?.total_pages)
    if (data && data.page) setPage(data?.page)
    setIsLoading(false)
  }, [data])

  const handleInputChange = (e) => setInputValue(e.target.value)
  const setFilterDebounce = debounce(handleInputChange, 500)
  useEffect(() => {
    if (inputValue) {
      setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue}&page=${page}`)
    } else {
      setUrl(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`)
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
      <div className="grid grid-cols-4 gap-10">{movies.length > 0 && movies.map((movie) => <MovieCard isLoading={isLoading} key={movie.id} item={movie}></MovieCard>)}</div>
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
    </div>
  )
}

export default MoviesPage
