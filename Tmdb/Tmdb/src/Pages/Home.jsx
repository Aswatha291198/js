import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

        const res = await axios.get(url, {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTVlM2UxNWYwMzc2MjllMGMyNzMzMzQ4ZThkYmY1YiIsIm5iZiI6MTc0NTgwNjc1MS44MTEsInN1YiI6IjY4MGVlNTlmMTBkMWU0NTNkMmViMWIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n_DG6B5IZZZLHh6nuvRj_IIkrD5dt_MThxp_HZGzWlU'
          }
        })

        setMovies(res.data.results)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div>
      <h1>Movies</h1>

      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  )
}

export default Home