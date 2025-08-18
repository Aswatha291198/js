import React from 'react'
import { Tabs } from 'antd'
import GameList from './GameList'
import TurfList from './TurfList'

const Admin = () => {
    const tabItems=[{
        key:"gamename",
        label:"GameName",
        children:<GameList/>
    },
  {
    key:"Turflist",
    label:"turflist",
    children:<TurfList/>
  }]
  return (
    <><Tabs items={tabItems}/></>
  )
}

export default Admin