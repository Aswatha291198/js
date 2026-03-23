import React from 'react'
import './nav.css'
import { FaPhoneAlt } from "react-icons/fa";
const NavBar = () => {
  return (
   <>
   <header className='header-main'>
    <div className="header-wrap">
     <div className="logo-cont">
       <h2>TradeMinds</h2>
     </div> <nav className='header-nav'><ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Tools</li>
        <li>Blogs</li>
        <li>Contact Us</li>
        </ul></nav>
        <div className='touch-div'>
          <div className="touch-wrap">
            <div className="phone-img">
              <FaPhoneAlt/>
            </div>
            <div className="touch-text">
              <span>Get in Touch</span>
            </div>

          </div>
        </div>
    </div>
   </header>
   </>
  )
}

export default NavBar