import React, { useEffect,useState } from 'react'
import './protected.css'
import {GetCurrentUser} from '../../src/api/user'
import{message} from 'antd'
import shoot from '../assets/shoot.png'
import book from '../assets/agenda.png'
import profile from '../assets/profile.png'
import {Link,useNavigate} from 'react-router-dom'
import{useSelector,useDispatch} from 'react-redux'
import {hideLoading,showLoading,setUser} from '../../redux/slice/userSlice'

const Protected = ({children}) => {
  const{user}=useSelector(state=>state.users)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const[dropDown,setOpenDropDown]=useState(false)
  console.log(user?.role);
  console.log(user);

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

  const getData=async()=>{
    try {
      dispatch(showLoading())
      const res=await GetCurrentUser()
      if(res.success){
        message.success(res.message)
        dispatch(setUser(res.data))
      }
      dispatch(hideLoading())
    } catch (error) {
      console.log(error.message);
      dispatch(hideLoading())
    }
  }
  useEffect(()=>{
    if(localStorage.getItem('token')){
      getData()
    }
    else{
      navigate('/login')
    }
  
  },[])
  
  return (
   <>
   <div className='nav-cont'>
    <header className='nav-header'>
      <div className='logo-cont'>
        <div className='logo-wrap'>
          <div className='logo-div'><Link to='/'className='link-logo'><h1 className='logo-text'>TURFO</h1></Link></div>
        </div>
      </div>
      <div className='nav-items'>
        <nav className="nav">
          <ul className="nav-ul">
            {user&&user?.role === 'player' && (
              <>
               <li className='nav-li'>
                 <span className='nav-span'><img src={shoot} alt="shoot" className='shoot' /></span> <Link to='/play' className='nav-link'>Play</Link></li> 
              <li className='nav-li'> 
                <span className='nav-span'>
                  <img src={book} alt="shoot" className='shoot' /></span> <Link to='/book' className='nav-link'>Book</Link>

              </li>
              </>
            )}
             {user && user.role==='owner' && (
                <>
                 <li className='nav-li'>
                  <span className='nav-span'>
                    <img src={trophy} alt="trophy"  className='shoot' />
                    </span><Link className='nav-link'>Tournament</Link></li> 
              <li className='nav-li'>
                <span className='nav-span'><img src={income} alt="income"  className='shoot' /></span>
                <Link  className='nav-link'>Incoming </Link></li>
                </>
              )}
          </ul>
        </nav>
      </div>
      <div className='user-div'>
     <div className='user-logo'>
      <div>
        <img src={profile} alt="pro" className='profile' onClick={handleToggle} />
      </div>
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
    </header>
   </div>
   <div className=''>{children}</div>
   </>
  )
}

export default Protected