import React, { useEffect, useState } from 'react'
import { hideLoading,showLoading } from '../../../redux/slice/userSlice'
import { useSelector,useDispatch } from 'react-redux'
import { getBookinById } from '../../api/book'
import { useParams } from 'react-router-dom'
import { message } from 'antd'
import { MdOutlineSportsCricket } from "react-icons/md";
import { BiFootball } from "react-icons/bi";
import { GiTennisBall } from "react-icons/gi";
import { IoBasketballOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import moment from 'moment'

const SingelGame = () => {
    const dispatch=useDispatch()
    const [game,setGame]=useState([])

    const getDay=(date)=>{
        const formattedDay=moment(date).format('dddd')
        return formattedDay
    }
    const getDate=(date)=>{
        const formattedDate=moment(date).format('DD MMM YYYY')
        return formattedDate
    }
    const sportIconMap = {
      Cricket: <MdOutlineSportsCricket />,
      Football: <BiFootball />,
      Tennis: <GiTennisBall />,
      Basketball: <IoBasketballOutline />,
    }
    const params=useParams()
    const{id}=params
const getData=async()=>{
    try {
        dispatch(showLoading())
        const response=await getBookinById(id)
        if(response.success){
            setGame(response.data)
        }
        else{
            message.error(response.message)
        }
    } catch (error) {
        console.log(error.message);
        
    }finally{
            dispatch(hideLoading())
    }
}

useEffect(()=>{
    getData()
},[])
  return (
   <>
   <main className='flex-c '>
    <div className='d-flex  gap'>
        <section className=' w-100  m-20'>
        <div className='d-flex ml-3 w-color w-7 bor'>
            <div className='m-20  border-black w-100 bor flex-c gap'>
                <div className='ml-3 flex-c gp-10 mt'>
                    <h2 className='font-p b-color ls ml-3'>{game?.game?.name}</h2>
                    <span className='cap ml-3 font-p'>Hosted by {game?.hostedBy?.name}</span>
                </div>
                <div className='ml-3 d-flex gp-10'>
                 <FaRegClock
                 className='ml-3 font-larger b-color'/>
                    <span 
                    className='font-larger font-p f-6'
                    style={{
                        position:'relative',
                        bottom:4
                    }}
                    >{getDay(game?.date)}, {getDate(game.date)}</span>
                </div>
            </div>
        </div>
    </section>
    </div>
   </main>
   
   
   </>
  )
}

export default SingelGame