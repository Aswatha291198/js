import React, { useEffect } from 'react'
import { Layout, message } from 'antd'
import { useSelector,useDispatch } from 'react-redux'
import { showLoading,hideLoading,setUser } from '../../redux/slice/userSlice'
import { useNavigate } from 'react-router-dom'
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
    <div className='d-flex  h-100 '>
      <ul className='d-flex  c-p  h-100 justify-content-between w-200 ls'>
        {menuRoles[user?.role]?.map((item)=>
        <li className='d-flex none  w-100 m-item  py-3 px-3'
        onClick={()=>navigate(item.path)}
        key={item.path}>
          <span className='menu-label f-size f-6 '>{item.label}</span>
  <span className='menu-icon f-size f-p f-6 py-3'
  style={{
    marginTop:5
  }}
  >{item.icon}</span>
          
        </li>
        )}
      </ul>
    </div>
    </Header>
  </Layout>
  <div>{children}</div>
    </>
  )
}

export default Protected