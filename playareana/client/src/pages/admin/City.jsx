import React, { useState } from 'react'

const City = () => {
  const[city,setCity]=useState(null)
  return (
    <>
    <main className='city-main'></main>
    <div className='add-city'>
      <button></button>
    </div>
    </>
  )
}

export default City