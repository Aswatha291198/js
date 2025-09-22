import React, { useState } from 'react'
import './play.css'

const Book = () => {
  const[turfs,setTurfs]=useState(null)
  return (
   <>
  <main className='book-container'>
    <div className='book-wrapper'>
      <section className='discover-container'>
        <div className='discover-wrapper'>
          <div className='discover-text-cont'>
            <h2 className='discover-text'>Discover and Book Nearby Grounds
</h2>
          </div>
           <div className='search-container'>
            <input type="text" Placeholder='Search By Venue' className='venue-search'/>
            
            
            </div> 
        </div>
       
      </section>
    </div>
  </main>
   </>
  )          
}

export default Book