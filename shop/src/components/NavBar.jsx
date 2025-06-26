import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Make sure the image exists in this path
import Home from './Home';
import About from './About';
import Notify from './Notify';
import Cart from './Cart';
import Contact from './Contact';

const NavBar = () => {
  const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Notify', path: '/notify' },
    { title: 'Cart', path: '/cart' },
  ];

  return (
    <>
      <nav className="bg-gray-100 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* Search bar with icon */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search Items"
              className="h-10 w-[300px] border border-blue-400 rounded-2xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex gap-6">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/notify' element={<Notify/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route> 
      </Routes>
    </>
  );
};

export default NavBar;
