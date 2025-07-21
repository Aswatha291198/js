import React, { useState } from 'react'
import {Button} from 'antd'
import { AllJobs } from '../../api/jobs'
import { useEffect } from 'react'
import { setUser,hideLoading,showLoading } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'
const jobs = () => {
  const [allJobs,SetAllJobs]=useState(null)
  const dispatch=useDispatch()

useEffect(()=>{
const getData=async()
},[])
  return (
    <div>

<Button/>


    </div>
    
  )
}

export default jobs