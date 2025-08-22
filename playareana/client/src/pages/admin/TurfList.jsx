import React, { useState } from 'react'
import { hideLoading,showLoading } from '../../../redux/slice/userSlice'
import{useDispatch,useSelector}from 'react-redux'
import { useEffect } from 'react'
import { getAllTurf } from '../../api/turf'
import { Button, message,Card } from 'antd'
import{EditOutlined} from '@ant-design/icons'
import'./turf.css'
const TurfList = () => {
  const[turfs,setTurfs]=useState(null)
  const dispatch=useDispatch()
const getData=async()=>{
  try {
    dispatch(showLoading())
    const response=await getAllTurf()
    if(response.success){
      const allTurf=response.data
     message.success(response.message)
      setTurfs(allTurf.map((turf)=>{
          return{
            ...turf,
            key:`turf${turf._id}`
          }
      }))
    }
    else{
      message.error(response.message)
    }
dispatch(hideLoading())
  } catch (error) {
    console.log(error.message);
    
  }
}
console.log((turfs));


  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <div className='turf-cont'>
      <h2>Manage Turf</h2>
    </div>
    <div className='card-back'>
      {turfs &&turfs.map((turf)=>{
     return(
       <Card
      key={turf._id}
      variant='borderless'
      title={turf.name}
      className='custom-card-turf'
      >
        <div>
          <img src="" alt="" />
          <span></span>
        </div>
        <div  >
          <span>{turf.name}</span>
          <span>{turf.email}</span>
          <span>{turf.location}</span>
          <span>{turf.isActive}</span>
          
        </div>

      </Card>  
     )
    })}
    </div>
    
    </>
  )
}

export default TurfList