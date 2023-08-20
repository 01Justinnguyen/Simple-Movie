import {} from 'react'
import { useNavigate } from 'react-router-dom'
import { tmdbAPI } from 'src/apiConfig/config'
import Button from '../button/Button'
import PropTypes from 'prop-types'
import { withErrorBoundary } from 'react-error-boundary'

const MovieCard = ({ item }) => {
  const { title, release_date, poster_path, vote_average, name, first_air_date, id } = item
  const navigate = useNavigate()
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <img className="w-full h-[250px] object-cover rounded-lg mb-5" src={poster_path ? tmdbAPI.image500(poster_path) : 'https://placehold.co/600x400/png'} alt={title} />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold">{title || name}</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>{new Date(release_date || first_air_date).getFullYear() || null}</span>
          <span className="flex items-center gap-x-1">
            {vote_average.toFixed(1)}
            <svg width="13" height="14" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 0L6.02963 2.60796L9 3.24671L6.975 5.49727L7.28115 8.5L4.5 7.28296L1.71885 8.5L2.025 5.49727L0 3.24671L2.97037 2.60796L4.5 0Z" fill="#FFCB45" />
            </svg>
          </span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch Now</Button>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    name: PropTypes.string,
    first_air_date: PropTypes.string,
    id: PropTypes.number
  })
}

// eslint-disable-next-line react-refresh/only-export-components
function FallbackComponent() {
  return <p className="text-red-400 bg-red-50">Something when wrong</p>
}
// eslint-disable-next-line react-refresh/only-export-components
export default withErrorBoundary(MovieCard, {
  FallbackComponent
})
