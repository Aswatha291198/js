import React, { useEffect, useState } from 'react'
import './single.css'
import { useParams } from 'react-router-dom'
import { getTurfbyId } from '../../api/turf'
import { useDispatch } from 'react-redux'
import { hideLoading,showLoading } from '../../../redux/slice/userSlice'
import { message } from 'antd'


const SingleTurf = () => {
  const [turf,setTurf]=useState(null)
  const params=useParams()
  const dispatch=useDispatch()
  const getTurf=async()=>{
try {
  dispatch(showLoading())
  const response=await getTurfbyId(params.id)
  if(response.success){
    setTurf(response.data)
    message.success(response.message)

  }
  dispatch(hideLoading())

  
} catch (error) {
  console.log(error.message);
  dispatch(hideLoading())
  
}
  }

  useEffect(()=>{
    getTurf()
  },[])

  return (
    <>
    <main className='single-main'>
      <div className='single-cont'>
        <div className='single-wrapper'>
          {turf && (
            <>
            <section className='turf-name-section'>
              <div className='turf-name-div'>
                <h2 className='turf-name-text'>
                  {turf.name}
                </h2>
               <span className='turf-address-text'>{turf.address}</span>
              </div>
              
            </section>
           <section className='book-img-sect'>
              <div className='book-img-div'>
                <div className='book-div'>
                  <img src={turf.poster} alt="turf" className='turf-poster' />
                </div>
              </div>
              <div className='timing-cont'>
                <div className='timing-div'>
                  <span className='timing-text'>Timing</span>
                  <span className='timings'>{turf.open} : {turf.close}</span>
                </div>
                <div className='location-div'>
                  <span className='location-text'>Location</span>
                  <span className='address-text'>{turf.address}</span>
                </div>
                <div className='book-now'>
                  <span className='book-now-span'>
                    Book Now
                  </span>
                </div>
              </div>
              
           </section>
          
            </>
          )}
        </div>
      </div>
    </main>
    
    </>
  )
}

export default SingleTurf