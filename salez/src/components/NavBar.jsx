import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import logo from '../logo/logo.png';

const NavBar = () => {
  return (
    <div className="bg-[#210c3d] h-24 flex items-center px-4">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="logo" className="h-12" />
      </Link>

      {/* Menu Links */}
      <ul className="flex ml-auto space-x-6 text-white">
        <li>
          <Link to="/Post-job" className="hover:text-yellow-300">Post Job</Link>
        </li>
        <li>
          <Link to="/find-job" className="hover:text-yellow-300">Find Job</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-300">About Us</Link>
        </li>
        <li>
          <Link to="/contact-us" className="hover:text-yellow-300">Contact Us</Link>
        </li>
      </ul>  

      {/* Buttons */}
      <div className="ml-6 space-x-4">
        <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Log in</button>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Register</button>
      </div>
      
    </div>
  );
};

export default NavBar;
