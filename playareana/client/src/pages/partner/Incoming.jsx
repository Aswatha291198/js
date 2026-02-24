import React, { useEffect, useState } from 'react'
import {Table} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading,hideLoading } from '../../../redux/slice/userSlice'
import { getBookingsTurfOwner } from '../../api/book'
const Incoming = () => {

const dispatch=useDispatch()
const{user}=useSelector(store=>store.users)
const[booking,setBooking]=useState(null)
console.log(user?._id,'inc');

const getData=async()=>{
try {
    dispatch(showLoading())
    console.log('inside incon');
    
    const response=await getBookingsTurfOwner(user?._id)
    if(response.success){
        console.log('success');
        
        setBooking(response.data)
    }
} catch (error) {
    console.log('errpr');
    
    console.log(error.message);
    
}finally{
    dispatch(hideLoading())
}
}
useEffect(()=>{
getData()
},[])

const tabItems=[
    {
        key:'name',
        title:'Turf Name',
        dataIndex:'name'
    },
     {
        key:'price',
        title:'Price',
        dataIndex:'price'
    },
     {
        key:'startime',
        title:' Start Time',
        dataIndex:'startTime'
    },
     {
        key:'duration',
        title:'Duration',
        dataIndex:'duration'
    },
     {
        key:'Type',
        title:'Book Type',
        dataIndex:'bookType'
    }
]

  return (
   <>
   <Table
   items={tabItems}
   />
   </>
  )
}

export default Incoming