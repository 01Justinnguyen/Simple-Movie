import {} from 'react'
import Skeleton from 'react-loading-skeleton'
const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
      <Skeleton className="w-full mb-5" height={250} />
      <div className="flex flex-col flex-1">
        <Skeleton className="mb-3" />
        <Skeleton className="mb-3" />
        <Skeleton className="w-full px-6 py-3" />
      </div>
    </div>
  )
}

export default MovieCardSkeleton
