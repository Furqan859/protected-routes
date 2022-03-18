import React from 'react'
import { Outlet } from 'react-router-dom'

const NavLayout = () => {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    </div>

  )
}

export default NavLayout