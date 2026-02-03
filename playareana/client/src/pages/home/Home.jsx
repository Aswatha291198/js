import React, { useState } from 'react'
import x from '../../assets/X.png'
import { CiLocationOn } from "react-icons/ci"
import { getAllCity } from '../../api/city'
import{useDispatch,useSelector}from 'react-redux'
import ground from '../../assets/turf-ground.png'
import { hideLoading,showLoading,setLocation } from '../../../redux/slice/userSlice'

const Home = () => {
  
  const[ selectedCity,setSelectedCity]=useState('')
  const dispatch=useDispatch()
  

  return (
    <>
    <main className='flex-c'>
    <section className='d-flex w-color' 
    style={{
      height:'600px',
      borderBottomLeftRadius:20
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
    <div className='w-100 p-top '>
      <div className='py-3 m-20 '>
        <section className='m-20  w-color bor  '>
         <div>
           <section className='m-20'>
            <h1 className='font-p b-color py-3'>Why Choose Us</h1>
          </section>
          <section className='w-50  m-20  pb-5'>
            <h2 className='font-p py-3'>
              Always Find a Game
            </h2>
            <p className='font-large b-color font-p py-3'>
              Tired of waiting for friends to be free? With Turfo, there’s always a game happening in your city. Morning, evening, weekday, or weekend, we make sure players are connected so the action never stops.
            </p>
          <h2 className='font-p py-3'>Play With Anyone, Anytime</h2>
          <p className='font-large b-color font-p py-3'>Whether you’re walking in solo or showing up with your crew, whether you're a complete beginner or a self-acclaimed “GOAT,” you’ll always be welcomed. Our community lives on inclusivity; there’s always room for more.</p>
          </section>  
         </div>
            
        </section>
      </div>
    </div>
      
    </main>
    
    
    </>
  )
}

export default Home