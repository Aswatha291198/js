import React, { useEffect, useState } from 'react'
import './admin.css'
import { message, Table } from 'antd'
import { getAllTurf } from '../../api/turf'
import{useDispatch} from 'react-redux'
import { hideLoading,showLoading } from '../../../redux/slice/userSlice'
const TurfList = () => {
const dispatch=useDispatch()
 const[turf,setTurf]=useState([])
  const getData=async()=>{
    try {
      const turfResponse=await getAllTurf()
      if(turfResponse.success){
        setTurf(turfResponse.data)
        message.success(turfResponse.message)
      }
    } catch (error) {
      console.log(error.message);
      message.error('error')
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
       key={turf._id}
       >
        <div>{turf.name}</div>
        <div>turf address</div>
        <div>email</div>
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