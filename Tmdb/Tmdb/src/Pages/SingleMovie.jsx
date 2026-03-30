import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getMovieCredits, singleMovie } from '../api/movie'
import { FaBookmark } from "react-icons/fa";
import { WatchListContext } from '../store/WatchList-context';
import Castcard from '../component/Castcard';
const SingleMovie = () => {
  const[movie,setMovie]=useState(null)
  const[cast,setCast]=useState([])
  const {watchList,removeFromWatchList,addToWatchList}=useContext(WatchListContext)
 
  const params=useParams()
 const alterNumber=(num)=>{
return num?.toFixed(1)
 }
   const{id}=params
 const isInls=watchList.find(m=>m.id==Number(id))
 const handleClick=()=>{
    if(isInls){
  removeFromWatchList(Number(id))
}
else{
  addToWatchList(movie)
}
 }
   const getDetails=async()=>{
    try {
      const response=await singleMovie(id)
      setMovie(response)
       
      const castResp=await getMovieCredits(id)
      setCast(castResp.cast)
      console.log(castResp.cast,'casrt');
    } catch (error) {
      console.log(error.message);
      
    }
   }
   
   useEffect(()=>{
    getDetails()
   },[id])
  return (
  <>
  <section className=' '>
    <figure className='mt-10 flex'>
      <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt="X"
      className='w-[400px]  h-[400px] ml-4 rounded-xl'
      />
      <figcaption className='flex flex-col gap-4'>
       <span className='font-bold ml-3 mt-3 text-2xl'>{movie?.original_title}</span>
      <div className='flex gap-10 mt-3 ml-3'>
        <span className='font-bold text-2xl'>{alterNumber(movie?.vote_average)}</span>
        <span className='text-2xl mt-2'>
          <FaBookmark
          className={`${isInls ?'text-red-500' :'text-black'} hover:cursor-pointer`}
          onClick={handleClick}/>
        </span>
      </div>
       <span className='mt-3 ml-3 font-bold text-2xl'>{movie?.runtime} Mins</span>
       <span className='mt-3 ml-3 font-bold text-2xl'>{movie?.release_date}</span>
      </figcaption>
    </figure>

  </section>
  <section className='shadow-lg mt-6 flex-col gap-3 '>
   <div className='p-3 font-bold text-3xl '>
     <h1 className='text-black/60 text-center tracking-wider'>Cast</h1>
   </div>
 <div className='flex gap-4'>
  {cast.slice(0,5).map((crew)=>(   
    <Castcard
    key={crew.id}
    character={crew.character}
    original_name={crew.original_name}
    profile_path={crew.profile_path}
    />
))}
 </div>
     </section>
  </>
  )
}

export default SingleMovie