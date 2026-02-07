import { Tabs } from 'antd'
import React from 'react'
import Turf from '../partner/Turf'
import Edit from '../Edit-profile/Edit'
const index = () => {
  const tabItems=[
    {
      key:'turf',
      label:'Turf',
      children:<Turf/>
    },
    {
      key:'edit',
      label:'Edit-profile',
      children:<Edit/>
    }
  ]
  return (
    <>
   <div className='m-20'>
     <Tabs items={tabItems} style={{
     margin:'5px'}}/>
   </div>
    
    </>
  )
}

export default index