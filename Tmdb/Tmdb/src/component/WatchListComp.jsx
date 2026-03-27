import React, { useContext } from 'react'
import { WatchListContext } from '../store/WatchList-context'

const WatchListComp = ({title,
    poster,
    rating,
    id,
    overview
}) => {
    
    const{removeFromWatchList}=useContext(WatchListContext)
  const handleClick=(id)=>{
    removeFromWatchList(id)
  }  
  return (
   <>
 <section className='shadow-lg/20 rounded-xl md:w-full'>
    <figure  className='flex p-3 '>
        <img src={`${'https://image.tmdb.org/t/p/original'}${poster}`} alt="x"
        className='w-[150px] rounded-xl border-3 border-gray-600 h-[250px]'
        />
        <figcaption className='flex flex-col p-3'>
            <span className='font-bold p-3 text-black/70 text-xl tracking-wider md:truncate'>{title}</span>
            <span className='font-bold p-2  '>{overview}</span>
            <span className='font-bold p-3'>{rating}</span>
            <button className='h-[50px] bg-indigo-700 shadow-lg shadow-indigo-500/50 text-white font-bold w-[200px] px-3 ml-3 rounded-xl tracking-wider cursor-pointer
            transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'
            onClick={()=>handleClick(id)}
            
            >Remove From WatchList</button>
        </figcaption>
    </figure>
 </section>
   </>
  )
}

export default WatchListComp