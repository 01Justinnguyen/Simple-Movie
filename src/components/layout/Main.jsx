import {} from 'react'
import Headers from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Main = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  )
}

export default Main
