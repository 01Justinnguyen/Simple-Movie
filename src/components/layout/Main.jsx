import React from 'react'
import Headers from './Header'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  )
}

export default Main
