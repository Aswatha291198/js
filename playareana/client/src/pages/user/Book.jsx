import React, { useState, useEffect } from 'react'
import './play.css'
import { getAllGame } from '../../api/game'
import { hideLoading, showLoading } from '../../../redux/slice/userSlice'
import { getAllTurf } from '../../api/turf'
import { IoMdFootball } from "react-icons/io";
import { GiCricketBat } from "react-icons/gi"
import {useNavigate} from 'react-router-dom'
import { MdOutlineSportsCricket } from "react-icons/md"

const Book = () => {
  const [gameType, setGameType] = useState('All')
  const navigate=useNavigate()
  const [filterGame, setFilterGame] = useState(null)
  const [turfList, setTurfList] = useState(null)

  const getData = async () => {
    try {
      
      const allturf = await getAllTurf()
     
      if (allturf.success) {
        setTurfList(allturf.data)
      }
    } catch (error) {
      console.log(error.message);

    }
  }
  console.log(turfList);
  
  useEffect(() => {
    getData()
  },[])
  return (
    <>
      <main className='main-cont'>
        <div className="main-div">
          <div className="book-head">
            <div className="book-game">
              <h1 className='font-style'
                style={{
                  color: 'white',
                  fontSize: '50px',
                }}>Pick a Venue </h1>
              <i className="fa-regular fa-futbol"
                style={{
                  color: 'white',
                  fontSize: '70px',
                }}></i>
              <h1 className='font-style'
                style={{
                  color: 'white',
                  fontSize: '50px',
                }}>Play  The Game</h1>
            </div>
          </div>
          <div className="all-games">
           
            <div className="search-game"> 
              <input type="text"
               placeholder='Search Your Arena'
               className='font-poppins' />  
               <div className='glass-div'>
                <i className="fa-solid fa-magnifying-glass glass"
                ></i>
               </div>
                </div>
          </div>
          <div className="turf-list">
           <div className="turf-cont">
            {
              turfList && turfList.map((turf)=>{
                return(
                  <div
                  key={turf._id}
                  className='turf-div cursor-pointer'
                    onClick={()=>window.open(`/turf/${turf._id}`, '_blank')
}
                  >
                    <img src={turf.poster} alt="" />
                      <button className='book-now cursor-pointer  '>Book-now</button>     
                    <div className='turf-details'>
                      <h2 className='font-style'>
                        {turf.name}
                      </h2>
                     <div className="turf-loc">
                       <span>{turf.city.name}</span>
                      <span>{turf.address}</span>
                     </div>
                      <div className="sport-list-cont">
                        {turf.AddSport.map((sport)=>(
                       <div className="sport-name"
                       key={sport._id}
                       >
                        
                          {sport.name==='Football' && <IoMdFootball className='book-icn'/>}
                          {sport.name==='Cricket' && <MdOutlineSportsCricket   className='book-icn'/>}
                       </div>
                      ))}
                      </div>
                    
                    </div>
                  </div>
                )
              })
            }
           </div>
          </div> 
          <div className='hi'></div>    </div>
      </main>
    </>
  )
}

export default Book