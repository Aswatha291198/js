import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading,hideLoading } from '../../../../redux/slice/userSlice'
import {getBookingUser } from '../../../api/book'
import { Tabs,Card } from 'antd'
import moment from 'moment'

const Bookings = () => {

  const dispatch=useDispatch()
  const[bookings,setBookings]=useState([])
const {user}=useSelector(store=>store.users)
const today=moment()

  const bookedGames=bookings.filter((b)=>b.hostedBy._id===user._id)
  const joinedGames=bookings.filter((b)=>
    b.bookType==='host' &&
  b.hostedBy._id.toString() !==  user._id.toString() &&
  b.players.some(p=>p.user._id ===user._id)
)
const formatTime=(time)=>{
  const format=moment(time,['hh:mm','HH:mm']).format('HH:mm a'  )
  return format
}
  
const formatDate=(date)=>{
  return moment(date).format('YYYY-MM-DD')
}
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
       <div className='d-grid-play gap'>
         {
          bookedGames && bookedGames.map((game)=>{
            return (
              <Card className='flex-c bor gp-10'>
                
               <div className='flex-c gp-10'>
                 <span>Turf Name : {game?.turf?.name}</span>
                <span>Game : {game?.game?.name}</span>      
                <span>Duration : {game.duration}</span>
                <span> Start Time : {formatTime(game.startTime)}</span>
                <span>{game?.totalPrice}</span>
                <span>Date : {formatDate(game?.date)}</span>
               </div>
              </Card>
            )
          })
        }
       </div>
        </>
      )
    },
    {
      key:'book',
      label:'Bookins',
      children:(
        <>
         <div className='d-grid-play gap'>
         {
          joinedGames && joinedGames.map((game)=>{
            return (
              <Card className='flex-c bor gp-10'>
               <div className='flex-c gp-10'>
                 <span>{game?.turf?.name}</span>
                <span>{game?.game?.name}</span>
                <span className='font-p'>Total Players {game.players.length}</span>
                <span>{game.duration}</span>
                <span>{formatTime(game.startTime)}</span>
                <span>{game?.totalPrice}</span>
                <span>{game.pricePerPlayer}</span>
                <span>Date : {formatDate(game?.date)}</span>
               </div>
              </Card>
            )
          })
        }
       </div>
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