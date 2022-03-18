import React from 'react'
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav >
      <ul className="list">
      
          <li><NavLink to='/about' className="items">About</NavLink></li>
          <li><NavLink to='/login' className="items">Login</NavLink></li>
          <li><NavLink to='/login' className="items">Logout</NavLink></li>
          <li><NavLink to='/menu' className="items">Menu</NavLink></li>
          <li ><NavLink to='/data' className="items">SignUp</NavLink></li>
          
         
          

        </ul>
      <button className="btn">BTN</button>
    </nav>
  )
}