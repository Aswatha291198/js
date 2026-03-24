import React, { useContext, useEffect, useState } from 'react'
import { movieContext } from '../store/Movies-context'

const Banner = () => {
const{movies}=useContext(movieContext)
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original';
const[index,setIndex]=useState(0)
const carouselMovies=movies?.slice(0,5) ?? []
console.log(movies);


useEffect(()=>{
  if(!carouselMovies.length){
    return 
  }
  const timer=setInterval(()=>{
    setIndex(prev => (prev + 1) % carouselMovies.length)
  },3000)
  return ()=>{
    clearInterval(timer)
  }
},[])
const currentMovie=carouselMovies[index]
if (!currentMovie) return null
  return (
    <>
    <section className='w-full md:w-full:lg flex justify-center items-center mt-3'>  
     <figure className='w-[90%] mt-5 shadow-2xl  '>
      <img src={`${IMG_BASE_URL}${currentMovie.backdrop_path}`} alt="x"
      className='rounded-2xl h-[450px] w-[100%]'
      />
      <figcaption className='flex flex-col relative'>
        <span className='absolute bottom-20 left-10 tracking-normal text-white font-bold text-5xl'>{currentMovie.title}</span>
        <span className='absolute bottom-5 left-10 tracking-normal text-white font-bold text-md'>{currentMovie.release_date  }</span>
      </figcaption>
     </figure>
    
    </section>
    </>
  )
}

export default Banner