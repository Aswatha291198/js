import React, { useEffect, useState } from 'react'
import './protected.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading, hideLoading, setUser } from '../../redux/slice/userSlice'
import { GetCurrentUser } from '../api/user'
import { message,Menu, Avatar } from 'antd'
import{LogoutOutlined, ProfileOutlined, UserOutlined}from "@ant-design/icons"

const Protected = ({ children }) => {
  const { user } = useSelector(store => store.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const[dropDown,setOpenDropDown]=useState(false)
  const handleToggle=()=>{
    setOpenDropDown(prev=>!prev)
  }
  const handleProfile=()=>{
    if(user && user?.role==='player'){
      navigate('/userprofile')
    }
    else if(user && user?.role==='owner'){
      navigate('/owner')
    }
    else if(user && user?.role==='admin'){
      navigate('/admin')
    }
  }
  const handleLogout=()=>{
    console.log('clicked');
    
    localStorage.removeItem("token")
    navigate('/login')
  }
// const userItem=[
//   {
//     key:"user",
//     label:`${user ? user.name :" "}`,
//     icon:<UserOutlined/>,
//     children:[
//       {
//         label:(
//           <span onClick={()=>{
//             if(user.role==='admin'){
//               navigate('/admin')
//             }
//             else if(user.role==='player'){
//               navigate('/userprofile')
//             }
//             else{
//               navigate('/owner')
//             }
//           }}>Profile</span>
//         ),
//         icon:<ProfileOutlined/>
//       },
//       {
//         label:(
//           <Link to='/login' 
//           onClick={()=>{
//             localStorage.removeItem("token")
//           }}>Logout</Link>
//         ),
//         icon:<LogoutOutlined/>
//       }
//     ]
//   }
// ]
  const getdata = async () => {
    try {
      dispatch(showLoading())
      const res = await GetCurrentUser()
      if (res.success) {
        message.success(res.message)
        dispatch(setUser(res.data))
        console.log(res.data.role  );
        
        dispatch(hideLoading())
      }
    } catch (error) {
      console.log(error.message);
      dispatch(hideLoading())

    }
    
  }
useEffect(()=>{
  if (localStorage.getItem("token")) {
      getdata()
    }
    else {
      navigate('/login')
    }
},[])
  return (
    <>
      <header className='header-cont'>
        <div className='space'></div>
        <div className='logo'>
          <h1 className='image'><Link to='/'>logo</Link></h1>
        </div>
        <nav className='nav-cont'>
          <div className='nav-div'>
            <ul className='ul-nav'>
              {user && user.role==='player' && (
               <>
                <li className='li-nav'>
                  <i className="fa-solid fa-person"></i><Link to='/play' className='lin-div'>Play</Link></li> 
              <li className='li-nav'>
                <i className="fa-regular fa-futbol"></i>
                <Link  className='lin-div' to='/book'>Book</Link></li>
               <li className='li-nav'>
                <i className="fa-solid fa-chart-line" to='/train'></i><Link  className='lin-div'>Train</Link></li>
               </>
              )}
              {user && user.role==='owner' && (
                <>
                 <li className='li-nav'><Link className='lin-div'>Turf</Link></li> 
              <li className='li-nav'><Link  className='lin-div'>Incoming </Link></li>
                </>
              )}
            </ul>

          </div>
        </nav>
        <div className='user-div'>
          <div className='user-wrap'onClick={handleToggle}>
            <Avatar
            size={40}
            icon={<UserOutlined/>}/>
          </div>
                 {dropDown && (
          <>
          <div className='dropdown'>
            <ul>
              <li onClick={handleProfile}><span  >My Profile</span></li>
              <li onClick={handleLogout}><span >Logout</span></li>

            </ul>
          </div>
          </>
        )}
        </div>
       
        
        {/* {user && <Menu items={userItem} thems='light' mode='vertical' className='custom-menu'/>} */}
      </header>
      <div>{children}</div>
    </>
  )
}

export default Protected