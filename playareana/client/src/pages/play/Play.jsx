import React, { useState } from 'react'
import { Input } from 'antd'
import { useParams, useSearchParams } from 'react-router-dom'
import { getGroupgameByCity } from '../../api/book'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { hideLoading,showLoading } from '../../../redux/slice/userSlice'
const Play = () => {
  const [searchParams]=useSearchParams()
  const city=searchParams.get('city')
  const[venue,setVenue]=useState([])
  const dispatch=useDispatch()
  const navigate=useNavigate()
const getData=async()=>{
  try {
    const response=await getGroupgameByCity(city)
    if(response.success){
        setVenue(response.data)
    }
  } catch (error) {
    console.log(error.message);
    
  }
}
console.log(city);


 return (
   <>
   <main className='flex-c gp-10'>
    <section className='d-f-center  h-1 w-1'>
      <h1 className='font-p ls mt'>Games in {city}</h1>
    </section>
   <section>
    <div>
  <div>
    <Input
    type='date'/>
  </div>
    </div>
   </section>
   </main>
   </>
  )
}

export default Play