import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { hideLoading,showLoading } from '../../../redux/slice/userSlice'
import { getAllTurf } from '../../api/turf'
const TurfList = () => {
  const[turf,setTurfs]=useState([])
const dispatch=useDispatch()
  const getData=async ()=>{
    try {
      dispatch(showLoading())
      const response=await getAllTurf()
      if(response.success){
        setTurfs(response.data)

      }
    } catch (error) {
     console.log(error.message);
     

    }finally{
 dispatch(hideLoading())
 
    }
  }

useEffect(()=>{
getData()
},[])

  const columns=[
    {
      key:'poster',
      title:'Poster',
      dataIndex:'poster',
      render:(text,data)=>{
        return <img src={data.poster}
        style={{
          width:100
        }} alt="poster" />
      }
    },

    {
      key:"turf",
      title:'Turf Name',
      dataIndex:'name',
     
    },
    {
      key:'email',
      title:'Email',
      dataIndex:'email',
      
    },
    {
      key:'num',
      title:'Number',
      dataIndex:'phone'
    },
    {
      key:'city',
      title:'City',
      dataIndex:'city',
      render:(text,data)=>{
        return <span>{data.city?.name}</span>  
      }
    },
    {
      key:'owner',
      title:'Owner',
      dataIndex:'owner',
      render:(text,data)=>{
        return <span>{data.owner?.name}</span>
      }
    }
  ]
  return (
   <>
   <Table columns={columns} dataSource={turf}/>
   </>
  )
}

export default TurfList