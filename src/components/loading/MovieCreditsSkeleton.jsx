import {} from 'react'
import Skeleton from 'react-loading-skeleton'
const MovieCreditsSkeleton = () => {
  return (
    <>
      <div className="py-10">
        <h2 className="mb-10 text-3xl text-center">Casts</h2>
        <div className="grid grid-cols-4 gap-5">
          {new Array(4).fill(0).map((item, idx) => (
            <div className="cast-item" key={idx}>
              <Skeleton className="w-full h-[350px] object-cover rounded-lg mb-3" />
              <Skeleton className="h-5 w-[200px]" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MovieCreditsSkeleton
