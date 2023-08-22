import {} from 'react'
import 'src/page-error.scss'
import { useNavigate } from 'react-router-dom'
const Page_404 = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center h-[100vh] justify-center">
      <h1 className="text-2xl font-bold text-primary">Oh no!!</h1>
      <p className="zoom-area">
        <b>You’re either misspelling the URL or requesting a page that's no longer here</b>
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="transition-all cursor-pointer link-container hover:opacity-90">
        <a onClick={() => navigate('/')} className="more-link">
          Visit the original article
        </a>
      </div>
    </div>
  )
}

export default Page_404
