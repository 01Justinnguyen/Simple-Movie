import {} from 'react'
import Skeleton from 'react-loading-skeleton'
const MovieTrailerSkeleton = () => {
  return (
    <>
      <div className="py-10">
        <div className="flex flex-col gap-10">
          <div>
            <Skeleton className="h-5 mb-5 w-[80%]" />
            <div className="w-[873] h-[491] aspect-video">
              <Skeleton className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieTrailerSkeleton
