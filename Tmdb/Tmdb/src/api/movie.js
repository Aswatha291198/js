import axios from "axios";

export const allMovies=async(pageNo)=>{
console.log('inside the movies api');

    try {
         const url = 'https://api.themoviedb.org/3/movie/popular'
    const res = await axios.get(url, {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTVlM2UxNWYwMzc2MjllMGMyNzMzMzQ4ZThkYmY1YiIsIm5iZiI6MTc0NTgwNjc1MS44MTEsInN1YiI6IjY4MGVlNTlmMTBkMWU0NTNkMmViMWIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n_DG6B5IZZZLHh6nuvRj_IIkrD5dt_MThxp_HZGzWlU'
          },params: {
    language: 'en-US',
    page: pageNo
  }
        })
        return res.data.results
    } catch (error) {
        console.log(error.message);
        
    }
}