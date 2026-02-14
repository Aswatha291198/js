import { Tabs } from 'antd'
import React from 'react'
import Bookings from './Bookings/Bookings'
import { useNavigate } from 'react-router-dom'
import Edit from '../Edit-profile/Edit'
const UserProfile = () => {

  const navigate=useNavigate()

  const tabItems=[
    {
      key:'book',
      label:'Bookings',
      children:<Bookings/>,
      
      
    },
    {
      key:'edit',
      label:'Edit-Profile',
      children:<Edit/>,
      
    }
  ]
  return (
    <div>
    <Tabs items={tabItems}  className='m-20'/>
  </div>
  )
}

export default UserProfile