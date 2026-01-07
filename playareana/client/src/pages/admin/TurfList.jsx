import React, { useEffect, useState } from 'react'
import './admin.css'
import { message, Table } from 'antd'
import { getAllTurf } from '../../api/turf'
import{useDispatch} from 'react-redux'
import { hideLoading,showLoading } from '../../../redux/slice/userSlice'
const TurfList = () => {
  console.log('coming to the turflist');
  
const dispatch=useDispatch()
 const[turf,setTurf]=useState([])
  const getData=async()=>{
    try {
      const response=await getAllTurf()
      if(response.success){
        const allturf=response.data
        setTurf(
          allturf.map((turf)=>{
              return{...turf,key:`turf${turf._id}`}
          })
        )
        message.success(response.message)
      }
    } catch (error) {
      console.log(error.message);
      message.error(error.message)
    }
  }
  console.log(turf);
  
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <main className='turf-main'>
    <div className="turf-list">
      <h2 className='font-poppins'>Turf List</h2>

</div>
<div className="turf-cont-list">
  {turf && turf.map((venue)=>{
    return (
      <div
       className='turf-container'
       key={venue._id}
       >
        <div>{venue?.name}</div>
        <div>{venue?.address}</div>
        <div>{venue.email}</div>
        <div>isActive</div>
       </div>
    )
  })}
</div>
    </main>
    
    </>
  )
}

export default TurfList