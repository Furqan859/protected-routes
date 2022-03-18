import React from 'react';
import '../Navbar/Navbar.css';
import { NavLink, Outlet } from 'react-router-dom'
import ProtectedNavbar from '../Navbar/ProtectedNavbar';

const ProtectLayput = () => {
  return (
    <div>
    <ProtectedNavbar/>
    
          
    <Outlet/>
    </div>
  )
}

export default ProtectLayput