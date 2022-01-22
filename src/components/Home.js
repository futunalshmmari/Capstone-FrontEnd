import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Login from './Login'

import './home.css'

function Home() {
  let loggedIn = localStorage.getItem("isLoggedln")
  if (loggedIn != "yes") {
    return (
      <div>
        <nav class="navbar">
          
          <ul class="nav">
          <li><Link to='/navabar' >home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/user'>user</Link></li>
            <li><Link to='/opinion' >opinion</Link></li>
          
          </ul>

        </nav>

        <Outlet></Outlet>
      </div>
    )
  }

  return (
    <div>
      <nav class="navbar">
        <ul class="nav">
              <li><Link to='/navabar' >home</Link></li>
          <li><Link to='/services'>services </Link></li>
          <li><Link to='/feedback'>feedback</Link></li>
          <li><Link to='/contractor'>Contractor</Link></li>
          <li><Link to='/opinion' >opinion</Link></li>
          <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
          <li><Link onClick={() => { localStorage.setItem("isLoggedln", "no"); window.open("/navabar", "_self") }} to='/' >Logout</Link></li>
        </ul>

      </nav>

      <Outlet></Outlet>
    </div>
  )
}


export default Home 