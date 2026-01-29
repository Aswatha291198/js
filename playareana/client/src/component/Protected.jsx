import React, { useEffect } from 'react'
import { Layout, message } from 'antd'
import { useSelector,useDispatch } from 'react-redux'
import { showLoading,hideLoading,setUser } from '../../redux/slice/userSlice'
import { NavLink, useNavigate } from 'react-router-dom'
import { GetCurrentUser } from '../api/user'
import { GiSoccerKick } from "react-icons/gi";
import { MdSportsVolleyball } from "react-icons/md";
const Protected = ({children}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const{user}=useSelector(store=>store.users)
const {Header}=Layout

const getUser=async()=>{
  try {
    dispatch(showLoading())
    const response=await GetCurrentUser()
    if(response.success){
      dispatch(setUser(response.data))

    }
    else{
      message.error(response.message)
      navigate('/login')
      dispatch(hideLoading())
    }
  } catch (error) {
    console.log(error.message);
     dispatch(hideLoading()) 
  }
  finally{
    dispatch(hideLoading())
  }
}

const handleProfile=()=>{
if(user?.role==='player'){
  navigate('/player')
}else if(user?.role==='admin'){
navigate('/admin')
}
else{
  navigate('/partner')
}
}
useEffect(()=>{
  getUser()
},[])

const menuRoles={
  player:[
   
     {label:'Book',path:'/book',icon:<MdSportsVolleyball/>},
     {label:'Play',path:'/play',icon:<GiSoccerKick/>} 
    
  ],
  partner:[
   
    // { label:'',path:'/book'},
    //  {label:'Play',path:'/play'} 
    
  ],
  admin:[
   
    //  {label:'Book',path:'/book'},
    //  {label:'Play',path:'/play'} 
    
  ]

}
console.log(user?.role,'role');
console.log(user?.name,'name');



  return (
    <>
  <Layout>
    <Header>
      <section>
        <h2 className='f-p color-g  c-p   f-size font-s py-3 p-left'
        
        onClick={()=>navigate('/')}>Turfo</h2>
      </section>
    <div className='d-flex  h-100 p-left '>
      <ul className='d-flex p-left g-4 justify-content-between'
      >
        {menuRoles[user?.role]?.map((item,index)=>(
          <li className='menu-item none p-left  f-size py-3 mt ' key={index}>
            <NavLink
            to={item.path}
            className={({isActive})=>
              isActive ?' menu-item active':'menu-item'}>
              
            <span className='f-6 ls'>{item.label}</span>
            <span className='py-3 px-3'>{item.icon}</span>
            
            </NavLink>
          </li>
      ))}
      </ul>
    </div>
    <section className='d-flex end w-200 px-3 mt'>
      <span
      className='c-p'
       onClick={handleProfile}>{user?.name}</span>
    </section>
    </Header>
  </Layout>
  <div
  style={{minHeight: 380, background: "#e9e5e5" }}
  
  >{children}</div>
    </>
  )
}

export default Protected