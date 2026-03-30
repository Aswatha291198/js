import React, { useContext, useState } from 'react'
import { WatchListContext } from '../store/WatchList-context'
import WatchListComp from '../component/WatchListComp'

const WatchList = () => {
  const {watchList,sortLow,sortHigh}=useContext(WatchListContext)
  const[input,setInput]=useState('')
  const[sort,setSort]=useState('low')
 
  
  return (
   <>
   <section className='p-3 flex flex-col gap-5'>
    <h2 className='text-center font-bold tracking-wider text-2xl'>WatchList</h2>
    <div className='flex gap-2 justify-around p-3'>
      <div className='flex gap-2'>
       <button className={`w-20  h-10 rounded-xl  font-bold tracking-wider ${sort==='low'?'bg-indigo-500 text-white' :'bg-white text-indigo-500 '}
       hover:cursor-pointer
       `}
       onClick={()=>(setSort('low'), sortLow())}>Low</button>
        <button
        className={`w-20  h-10 rounded-xl font-bold tracking-wider ${sort==='high'?'bg-indigo-500 text-white' :'bg-white text-indigo-500'}
       hover:cursor-pointer
       `}
       onClick={()=>(setSort('high'),sortHigh())}
        >High</button>
      </div>
      <div>
        <input type="text" value={input} placeholder='Search here...'
        className='border-none outline-none bg-gray-300 rounded-xl h-10 text-center'
       onChange={(e)=>setInput(e.target.value)}
       />
      </div>
    
    </div>
    {watchList.filter((item)=>item.title.toLowerCase().includes(input.toLocaleLowerCase())).map((watchList,idx)=>{
      return (
        <WatchListComp
        movie={watchList}
        key={idx}
        title={watchList.title}
        poster={watchList.poster_path}
        rating={watchList.vote_average}
        id={watchList.id}
        overview={watchList.overview}
          />
      )
    })}
   </section>
   
   </>
  )
}

export default WatchList