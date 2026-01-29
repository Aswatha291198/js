import React, { useState } from 'react'
import x from '../../assets/X.png'
import { CiLocationOn } from "react-icons/ci"
import { getAllCity } from '../../api/city'
import{useDispatch,useSelector}from 'react-redux'
import { hideLoading,showLoading,setLocation } from '../../../redux/slice/userSlice'

const Home = () => {
  
  const[ selectedCity,setSelectedCity]=useState('')
  const dispatch=useDispatch()
  

  return (
    <>
    <main className='flex-c'>
    <section className='d-flex w-color' 
    style={{
      height:'70vmin',
      borderRadius:20
    }}
    > 
    <div className='d-f-center  flex-c w-50 '>
    
    <h1 className='font-p w-50 py-3 mb b-color '>
      Book sports venues.
Join games.
Find trainers near you.
    </h1>
    <p className='font-p w-50 b-color py-3'>The World’s Largest Sports Community to Book Venues, Find Trainers, and Join Games Near you.</p>

    </div>
    <div className='w-50'>
    <img src={x} alt=""className='h-100 p-left' />
    </div>
    
    </section>

    </main>
    <div className='d-flex py-3 px-3'>
      <section>
        <h2>Why Chooose Us</h2>
      </section>
    </div>
    
    </>
  )
}

export default Home