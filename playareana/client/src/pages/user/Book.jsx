import React, { useEffect, useState } from 'react'
import './play.css'
import whistle from '../../assets/whistle.png'
import down from '../../assets/down.png'
import { getAllGame } from '../../api/game'
import {useDispatch} from 'react-redux'
import {hideLoading,showLoading} from '../../../redux/slice/userSlice'

const Book = () => {
  const[turfs,setTurfs]=useState(null)
  const[dropDown,setDropDown]=useState(false)
  const [sports,setSports]=useState(null)
  const dispatch=useDispatch()

  const getData= async ()=>{
    try {
      dispatch(showLoading())
      const gameResponse=await getAllGame()
      if(gameResponse.success){
        setSports(gameResponse.data)
      }
      dispatch(hideLoading)      
    } catch (error) {
      console.log(error.message);
      dispatch(hideLoading())
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
   <>
  <main className='book-container'>
    <div className='book-wrapper'>
      <section className='discover-container'>
        <div className='discover-wrapper'>
          <div className='discover-text-cont'>
            <h2 className='discover-text'>Discover and Book Nearby Grounds Easily for Your Next Match
</h2>
          </div>
           <div className='search-container'>
           <div className='search-wrapper'>
             <i className="fa-solid fa-magnifying-glass search"></i>
            <input type="text" Placeholder='Search By Venue' className='venue-search'/>
           </div>
        
            </div> 
        </div>
       
      </section>
      
    </div>
  </main>
   </>
  )          
}

export default Book