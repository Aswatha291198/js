import { Tabs } from 'antd'
import React, { Children } from 'react'
import Turf from './Turf'

const Reviews = () => {
  const tab=[
    {
      key:'1',
      lable:'turfs',
      children:<Turf/>
    }
  ]
  return (
    <>
    <Tabs/>
    </>
  )
}

export default Reviews