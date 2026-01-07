import React, { useState } from 'react'
import './play.css'
import {useSelector} from 'react-redux'
import { CiBookmark } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { useNavigate,Outlet } from 'react-router-dom';
const UserProfile = () => {
  const{user}=useSelector(store=>store.users)
  const[active,setActive]=useState('bookings')
  const navigate=useNavigate()
  return (
  <>
  <main className='user-main '>
    <div className="user-cont">
      <div className="user-div">
      <div className="user-name">
        <h2 className='font-poppins'> Welcome {user?.name}</h2>
      </div>
    
    </div>
      <div className="user-info">
       <div className="user-detail">
         <div className="booking-cont cursor-pointer"
            onClick={()=>{setActive('bookings')
              navigate('bookings')}
            }

        >
          <CiBookmark/>
          <span>Bookings</span>
        </div>
        <div className="edit-cont cursor-pointer"
        onClick={()=>{setActive('edit')
          navigate('edit-profile')
        }}
        >
          <MdEdit/>
          <span>Edit-Profile</span>
        </div>
       </div>
       <div className="user-right">
        <Outlet></Outlet>
       </div>
      </div>
    </div>
  </main>
  
  </>
  )
}

export default UserProfile