import React, { useContext } from 'react'
import { FaBookmark } from "react-icons/fa";
import { WatchListContext } from '../store/WatchList-context';
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original'

const MovieCard = ({ film }) => {
    const {addToWatchList}=useContext(WatchListContext)
const handleWatchList=()=>{
    addToWatchList()
}

  return (
    <figure className='w-[25%] flex flex-col ml-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-xl mt-3 '>
      <img
        src={`${IMG_BASE_URL}${film.poster_path}`}
        alt={film.title}
        className='w-full h-full object-cover rounded-lg'
      />
      <figcaption className='relative'>
        <span className='absolute bottom-2 left-2 text-white/70 font-bold tracking-wider'>{film.title}</span>
        <button 
        onClick={()=>handleWatchList()}
        className='absolute bottom-2 left-75 text-2xl cursor-pointer text-white/70 font-bold'>
<FaBookmark />   
        </button>
      </figcaption>
    </figure>
  )
}

export default MovieCard