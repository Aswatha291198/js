import React, { useState } from 'react'
import './owner.css'
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { TbBuildingStadium } from "react-icons/tb"
import { GoCodeReview } from "react-icons/go"
import { Outlet,useNavigate } from 'react-router-dom';
const Owner = () => {
  const {user}=useSelector(store=>store.users)
  const navigate=useNavigate()
  const[active,setActive]=useState('turfs')
  console.log(user?._id ,'from the owner');

  
  return (
   <>
  <main className='owner-main'>
    <div className="owner-div">
     <div className="owner-left">
      <div className="owner-left-cont">
        <div className="owner-profile">
          <FaUserCircle className='owner-icon'/>
          <span className='font-style'>{user?.name}</span>
        </div>
        <div className="owner-menu">
          <div className={`owner-turf cursor-pointer ${active==='turfs'?'active':""}`}
          onClick={()=>{
            setActive('turfs')
            navigate(`turf/${user._id}`)
          }}
          >
            <TbBuildingStadium/>
            <span>Turfs</span>
          </div>
          <div className={`owner-turf cursor-pointer ${active==='review'?'active':""}`}
          onClick={()=>{
            setActive('review')
            
          }}>
            <GoCodeReview/>
            <span>Review</span>
          </div>
          <div className={`owner-turf cursor-pointer ${active==='edit'?'active':""}`}
          onClick={()=>{
            setActive('edit')
             navigate('edit-profile') 
         }}>
            <GoCodeReview/>
            <span>Edit</span>
          </div>
        </div>
      </div>
     </div>
     <div className="owner-right">
      <Outlet/>
     </div>
      </div></main> 
  
   </>
  )
}

export default Owner