import React from 'react'
import { Tabs } from 'antd'
import GameList from './gameList'
import TurfList from './TurfList'
const Admin = () => {
    const tabItems=[
        {key:"1",label:'game',children:<GameList/>},
        {key:"2",label:'turf',children:<TurfList/>}
    ]
    
  return (
    <><Tabs items={tabItems}/></>
  )
}

export default Admin