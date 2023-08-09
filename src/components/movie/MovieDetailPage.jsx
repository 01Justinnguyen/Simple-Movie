import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { fetcher } from '../../config'

const MovieDetailPage = () => {
  const { movieId } = useParams()
  const [movieDetail, setMovieDetail] = useState({})
  const { data } = useSWR(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5e6b78a5f9690b9cb75bb71bb40ab0b4`, fetcher)
  useEffect(() => {
    if (data) setMovieDetail(data)
  }, [data])

  const { poster_path } = movieDetail

  return (
    <>
      <div className="w-full h-[600px] relative mb-10">
        <div className="overlay"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`
          }}></div>
      </div>
    </>
  )
}

export default MovieDetailPage
