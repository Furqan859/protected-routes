import React from 'react'
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav >
      <ul className="list">
      
          <li><NavLink to='/about' className="items">About</NavLink></li>
          <li><NavLink to='/login' className="items">Login</NavLink></li>
          <li><NavLink to='/signup' className="items">Signup</NavLink></li>
          
          

        </ul>
      <button className="btn">BTN</button>
    </nav>
  )
}