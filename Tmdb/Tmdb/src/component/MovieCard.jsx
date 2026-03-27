import React, { useContext, useState } from 'react'
import { FaBookmark } from "react-icons/fa";
import { WatchListContext } from '../store/WatchList-context';
import{useNavigate} from 'react-router'
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original'

const MovieCard = ({ film }) => {
    const {watchList,addToWatchList,removeFromWatchList}=useContext(WatchListContext)  
    const[listMovies,setListMovies]=useState()
    const navigate=useNavigate()
const isInTheWatchList=watchList.some(m=>m.id===film.id)
  
const handleWatchList=(film)=>{
  if(isInTheWatchList){
    console.log('inside the if');
    console.log(film.id,'id');
    
    removeFromWatchList(film.id)
  }
  else{
    addToWatchList(film)
  }

}

  return (
    <figure className='w-[25%] hover:cursor-pointer flex flex-col ml-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-lg mt-3 '
    onClick={()=>navigate(`/movie/${film.id}`)}
    >
      <img
        src={`${IMG_BASE_URL}${film.poster_path}`}
        alt={film.title}
        className='w-full h-full object-cover rounded-lg'
      />
      <figcaption className='relative'>
        <span className='absolute bottom-2 left-2 text-white/70 font-bold tracking-wider'>{film.title}</span>
        <button 
        onClick={()=>handleWatchList(film)}
        className='absolute bottom-2 left-75  text-2xl cursor-pointer text-white/70 font-bold'>
<FaBookmark 
className={isInTheWatchList ?'text-red-700':'text-white'}
/>  
        </button>
      </figcaption>
    </figure>
  )
}

export default MovieCard