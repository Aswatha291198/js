 import React, { useEffect } from 'react'
 import {useDispatch} from 'react-redux'
 import {useParams} from 'react-router-dom'
 import {getTurfbyId} from '../../api/turf'
 import {message }from 'antd'
 import {hideLoading ,showLoading} from '../../../redux/slice/userSlice'
import { useState } from 'react'
import { LiaTableTennisSolid } from "react-icons/lia"
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdSportsCricket } from "react-icons/md";
 import Footer from '../footer/Footer'
 import { TbCricket } from "react-icons/tb";
 import { PiSoccerBallBold } from "react-icons/pi";
 import { GiShuttlecock } from "react-icons/gi"
import BookModel from './BookModel'
 const SingleTurf = () => {
  const dispatch=useDispatch()
  const parmas=useParams()
  const[turf,setTurf]=useState({})
  const[bookModel,setBookModel]=useState(false)
  console.log(parmas.id)
  console.log(parmas)

const getData=async()=>{
  try {
    dispatch(showLoading())
    const response=await getTurfbyId(parmas.id)
    if(response.success){
    setTurf(response.data)
    message.success(response.message)
    dispatch(hideLoading())
    }
  } catch (error) {
    console.log(error.message);
    dispatch(hideLoading()) 
  }
}
useEffect(()=>{
getData()
},[])
console.log(turf);
if(turf.poster){
  console.log('its is there')
}


   return (
     <>
     <main className='single-cont'>
       <div className='single-div'>
        <div className="single-left">
          <div className="name-cont">
            <div className="name-div">
              <span className='font-poppins'>{turf.name}</span>
            </div>
            
          </div>
        <div className="turf-img">
          <img src={turf.poster} alt="x" />
        </div>
        <div className='sport-available'
        >
          <div className="sport-list">
            <h2 className='font-poppins'>Sport Available</h2>
            <div className="sport-cont">
              {turf.AddSport?.map((turf)=>{
                return (
                  <div className="turf-game">
                    {turf ==='Cricket' && <TbCricket
                    className='sport-icon'/>}
                    {turf==='Football' && <PiSoccerBallBold
                    className='sport-icon'/>}
                    {turf==='Shuttle' && <GiShuttlecock/>}
                    {turf==='Pickle Ball' && <LiaTableTennisSolid
                    className='sport-icon'/>}
                    <span>{turf}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        </div>
        <div className="single-right">
          <div className="book-now-cont font-poppins cursor-pointer"
          onClick={()=>setBookModel(prev=>!prev)}
          >
            Book Now
          </div>
          <div className="timing-cont">
            <span className='font-poppins'>Timing</span>
            <span className='font-poppins'>{turf.open} - {turf.close}</span>
          </div>
          <div className="location-div">
            <span className='font-poppins'>Location</span>
            <span className='font-poppins'>{turf.address}</span>
          </div>
        </div>
       </div>

      </main>
      {bookModel &&(<BookModel bookModel={bookModel} setBookModel={setBookModel}/>)}
     
      </> 
   )
 }
 
 export default SingleTurf;