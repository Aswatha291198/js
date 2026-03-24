import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import { movieContext } from '../store/Movies-context'
import { allMovies } from '../api/movie'
import Banner from '../component/Banner'
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

    </>
  )
}

export default Home