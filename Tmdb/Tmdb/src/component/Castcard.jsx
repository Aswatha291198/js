import React from 'react'

const Castcard = ({character,original_name,profile_path}) => {
  return (
    <>
   <div className='m-3 flex justify-center items-center  w-[200px] shadow-lg rounded-2xl'>
    <figure className='p-3 flex-col'>
      <img src={`https://image.tmdb.org/t/p/original${profile_path}`}
      className='w-20 rounded-full mx-auto'
      alt="" />
    <figcaption className='flex flex-col gap-2 mt-5 text-center'>
  <span className='font-bold text-md'>{character}</span>
  <span className='font-bold text-sm text-gray-500'>{original_name}</span>
</figcaption>
    </figure>
   </div>
    </>
  )
}

export default Castcard