import React from 'react'
import { Link } from 'react-router'
import { TiHomeOutline } from "react-icons/ti";
import { FaBookmark } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-4 sm:w-full">
      <nav className="max-w-sm md:max-w-xl lg:max-w-5xl ml-3 px-4 w-[90%] md:w-[90%] lg:w-[100%] flex justify-center items-center">
        <h1 className='bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent text-3xl font-bold ml-3 tracking-wider'>TMDB</h1>
        <ul className="flex gap-20 w-full justify-center items-center py-3  ml-3">
          <li className=' text-xl text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer font-bold flex relative'>
            <Link to='/'>Home</Link>
            <TiHomeOutline className='absolute left-17 top-1' />

          </li>
          <li className='text-xl text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer font-bold flex relative'>
            <Link to='/watchlist'>WatchList</Link>
            <FaBookmark className='absolute left-25 top-1' />
            </li>
            
        </ul>
      </nav>
    </header>
  )
}

export default Header