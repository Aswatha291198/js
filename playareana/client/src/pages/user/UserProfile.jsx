import React from 'react'
import './user.css'
import { useEffect } from 'react'
import { setUser,hideLoading,showLoading } from '../../../redux/slice/userSlice'
import { useDispatch,useSelector } from 'react-redux'
import { GetCurrentUser } from '../../api/user'

const UserProfile = () => {
  const dispatch=useDispatch()
  const{user}=useSelector(store=>store.users)
  useEffect(()=>{
const getUser=async ()=>{
try {
  const response=await GetCurrentUser()
dispatch(hideLoading())
if(response.success){
  dispatch(setUser(response.data))
  dispatch(hideLoading())
}
} catch (error) {
  dispatch(hideLoading())
}
}
  },[])
  return (
    <>
    <div className='user-cont'>
    <div className='profile-cont'>
      <div className='profile-wrap'>
        <div className='image-cont'>
        </div>
        <div className='name-cont'><span className='name'>{user.name}</span></div>
         <div className='email-cont'><span className='email'>{user.email}</span></div>
      </div>
    </div>
    <div className='bookings'>All Bookings</div>
    <div>Edit Profile </div>
    </div>


    </>

  )
}

export default UserProfile