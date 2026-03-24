import { createContext, useState } from "react";

export const movieContext=createContext()

const MovieContextProvider=({children})=>{
    console.log('inside the context');
    
    const[movies,setMovies]=useState([])
    return (
        <movieContext.Provider value={{
            movies,setMovies
        }}>{children}</movieContext.Provider>
    )
}
export default MovieContextProvider