import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import { movieContext } from '../store/Movies-context'
import { allMovies } from '../api/movie'
import Banner from '../component/Banner'
import MovieCard  from '../component/MovieCard'
import { WatchListContext } from '../store/WatchList-context'
const Home = () => {
  const {movies,setMovies}=useContext(movieContext)
  const [page,setPage]=useState(1)
    const[disabled,setDisabled]=useState(false)
 
    const handleNext=()=>{
      if(page===10000){
        return
      }
      else{
        setPage(prev=>prev+1)
      }
    }
    const handlePrev=()=>{
      if(page===1){
        return 
      }
      else{
        setPage(prev=>prev-1)
      }
    }
  const getMovies=async()=>{
    try {
      const response=await allMovies(page)
      setMovies(response)
      console.log(movies,'form the context');
      
    } catch (error) {
      console.log(error.message);
      
    }
  }
  useEffect(()=>{
    getMovies()
  },[page])
  return (
    <>
     <Banner/>
     <section className=' mt-3'>
      <h1 className='text-center text-2xl font-bold text-black/50 mt-5'>Popular Movies</h1>
       <div className='flex flex-wrap gap-10 p-5   justify-center items-center'>
    {movies && movies.map((film) => (
      <MovieCard key={film.id} film={film}
     
      />
    ))}
  </div>
  <div className='flex justify-center items-center m-3 gap-4'>
    <button className='mt-3  w-20 h-10 hover:cursor-pointer text-xl bg-indigo-600 font-bold text-white border-2 border-white/60 rounded-xl'
    onClick={handleNext}
    > +</button>
   <span className='mt-3'>{page}</span>
    <button className='mt-3 w-20 h-10 hover:cursor-pointer text-xl bg-indigo-600 font-bold text-white border-2 border-white/60 rounded-xl'
     onClick={handlePrev}
    > - </button>
  </div>
     </section>

    </>
  )
}
 

export default Home