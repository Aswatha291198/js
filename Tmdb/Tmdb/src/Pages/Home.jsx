import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import { movieContext } from '../store/Movies-context'
import { allMovies } from '../api/movie'
import Banner from '../component/Banner'
import MovieCard  from '../component/MovieCard'
const Home = () => {
  const {movies,setMovies}=useContext(movieContext)
  const [page,setPage]=useState(1)
  const getMovies=async()=>{
    try {
      const response=await allMovies(page)
      setMovies(response)
      console.log(movies,'form the context');
      
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getMovies()
  },[page])
  return (
    <>
     <Banner/>
     <section className='border border-red-500 mt-3'>
      <h1 className='text-center text-2xl font-bold text-black/50 mt-5'>Popular Movies</h1>
       <div className='flex flex-wrap gap-10 p-5   justify-center items-center'>
    {movies && movies.map((film) => (
      <MovieCard key={film.id} film={film} />
    ))}
  </div>
     </section>

    </>
  )
}
 

export default Home