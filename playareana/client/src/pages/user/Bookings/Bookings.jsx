import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading,hideLoading } from '../../../../redux/slice/userSlice'
import {getBookingUser } from '../../../api/book'
import { Tabs } from 'antd'

const Bookings = () => {

  const dispatch=useDispatch()
  const[bookings,setBookings]=useState([])
const {user}=useSelector(store=>store.users)
  const bookedGames=bookings.filter((b)=>b.hostedBy._id===user._id)
  const joinedGames=bookings.filter((b)=>b.bookType==='host' &&
  b.players.some(p=>p.user._id ===user._id)
)
  
  const getData=async()=>{
    try {
      dispatch(showLoading())
      const response=await getBookingUser()
      if(response.success){
        setBookings(response.data)
      }
    } catch (error) {
      console.log(error.message);
      
    }finally{
       dispatch(hideLoading())
    }
  }

  const tabItems=[
    {
      key:'all',
      label:'Bookings',
      children:(
        <>
        {
          bookedGames && bookedGames.map((game)=>{
            return (
              <div 
              key={game._id}>
                {game.turf.name}
                {game.maxPlayers}
                <img src={game?.turf?.poster} alt="poster" />

              </div>
            )
          })
        }
        </>
      )
    },
    {
      key:'book',
      label:'Bookins',
      children:(
        <>
        {
          joinedGames && joinedGames.map((game)=>{
            return (
              <div key={game._id}>
                <img src={game?.turf?.poster} alt="poster" />
                <span>{game?.hostedBy.name}</span>
              </div>
            )
          })
        }
        </>
      )
    }
  ]
  useEffect(()=>{
    getData()
  },[])
  return (
   
   <>
   <main>
    <Tabs className='m-20'
    items={tabItems}
    
    />
   </main>
   </>
  )
}

export default Bookings