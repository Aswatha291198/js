import { Table,Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { hideLoading,showLoading } from '../../../redux/slice/userSlice'
import { getAllGame } from '../../api/game'

const GameList = () => {
  const[game,setGames]=useState([])
const dispatch=useDispatch()
  const getData=async ()=>{
    try {
      dispatch(showLoading())
      const response=await getAllGame()
      if(response.success){
        setGames(response.data)

      }
    } catch (error) {
     console.log(error.message);
     

    }finally{
      console.log(game,'game');
      
 dispatch(hideLoading())
 
    }
  }

useEffect(()=>{
getData()
},[])

   const columns=[
    {
      key:'img',
      title:'Sport Image',
      dataIndex:'poster',
      render:(_,data)=>{
        return
        <img src={data.poster} alt="sfjnj" />
      }
    },

    {
      key:'name',
      title:'Sport Name',
      dataIndex:'name'
    },
    {
      key:'actions',
      title:'Action',
      render:(text,data)=>(
        <div>
          <Button type='primary'>Edit</Button>
          <Button>Delete</Button>
        </div>
      )
        
      
    } ,   
        

  ]
  return (
   <>
   <Table columns={columns} dataSource={game}/>
   </>
  )
}

export default GameList