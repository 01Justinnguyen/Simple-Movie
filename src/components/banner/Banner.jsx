import {} from 'react'
import Button from 'src/components/button/Button'
import { useNavigate } from 'react-router-dom'
import { tmdbAPI } from 'src/apiConfig/config'

const Banner = ({ banner }) => {
  const { title, backdrop_path, id } = banner
  const navigate = useNavigate()
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="overlay"></div>
      <img className="object-cover object-top w-full h-full rounded-lg" src={backdrop_path ? tmdbAPI.imageOriginal(backdrop_path) : 'https://placehold.co/600x400/png'} alt={title} />
      <div className="absolute w-full text-white left-5 bottom-5">
        <h2 className="mb-5 text-3xl font-bold">{title}</h2>
        <div className="flex items-center mb-8 gap-x-3">
          <span className="px-4 py-2 transition-all border border-white rounded-md cursor-pointer hover:bg-primary">Adventure</span>
          <span className="px-4 py-2 transition-all border border-white rounded-md cursor-pointer hover:bg-primary">Adventure</span>
          <span className="px-4 py-2 transition-all border border-white rounded-md cursor-pointer hover:bg-primary">Adventure</span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch Now</Button>
      </div>
    </div>
  )
}

export default Banner
