import React, { useState } from 'react'
import './admin.css'
import {Outlet,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MdOutlineStadium } from "react-icons/md"
import { FaCity } from "react-icons/fa"
import { FaRegEdit } from "react-icons/fa"
import { IoGameControllerOutline } from "react-icons/io5"

const index = () => {
  const { user } = useSelector(store => store.users)
  const[active,setActive]=useState('turf')
  const navigate=useNavigate()

  return (
    <main className='admin-main'>
      <div className="admin-div">
        <div className="admin-cont">
          <div className="admin-left">

            <div className="admin-profile">
              <div className="admin-detail">
                <div className="admin-img">
                  <i
                    className="fa-solid fa-user"
                    style={{ fontSize: '25px', color: 'rgb(0, 181,98)' }}
                  ></i>
                </div>
                <span className='font-poppins'>{user?.name}</span>
                <span className='font-poppins'>{user?.email}</span>
              </div>
            </div>

            <div className="admin-info">
              <div className={`admin-manage cursor-pointer ${active === 'turf' ? 'active' : ''}`}
              onClick={() => {setActive('turf')
                navigate('turfs')
              }      
              }>
                  <MdOutlineStadium className='admin-icon' />
                  <span>Turfs </span> 
              </div>
               <div className={`admin-manage cursor-pointer ${active === 'city' ? 'active' : ''}`}
               onClick={() =>{ setActive('city')
                navigate('city')
               }}
               > 
                  <FaCity className='admin-icon' />
                  <span>City</span>
              </div>

              <div className={`admin-manage cursor-pointer ${active === 'game' ? 'active' : ''}`}
              onClick={()=>{setActive('game')
                navigate('game')
              }}>
                  <IoGameControllerOutline className='admin-icon' />
                  <span>Game</span>
              </div>

              <div className={`admin-manage cursor-pointer ${active === 'edit' ? 'active' : ''}`}
              onClick={()=>{setActive('edit')
                navigate('edit-profile  ')
              }}>
                  <FaRegEdit className='admin-icon' />
                  <span>Edit Profile</span>
              </div>

            </div>

          </div>
          <div className="admin-right">
            <Outlet/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default index
