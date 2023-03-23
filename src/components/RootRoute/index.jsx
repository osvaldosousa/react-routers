import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../Banner'

function RootRoute() {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  )
}

export default RootRoute
