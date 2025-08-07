import React from 'react'
import './protected.css'
import { Link } from 'react-router-dom'

const Protected = ({children}) => {
  return (
    <>
      <header className='header-cont'>
        <div className='space'></div>
        <div className='logo'>
          <h1 className='image'>logo</h1>
        </div>
        <nav className='nav-cont'>
          <div className='nav-div'>
            <ul className='ul-nav'>
              <li className='li-nav'><Link className='lin-div'>Play</Link></li> 
              <li className='li-nav'><Link  className='lin-div'>Book</Link></li>
              <li className='li-nav'><Link  className='lin-div'>Train</Link></li></ul>
          </div>
        </nav>
      </header>
<div>{children}</div>
    </>
  )
}

export default Protected