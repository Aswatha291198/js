import React, { use, useEffect, useState } from 'react'
import{showLoading,hideLoading}from '../../../redux/slice/userSlice'
import{useDispatch} from 'react-redux'
import { Button, message,Table } from 'antd'
import{DeleteOutlined} from '@ant-design/icons'
import './gamelist.css'
import { getAllGame } from '../../api/game'
import GameForm from './GameForm'
import DeleteModal from './DeleteModal'


const GameList = () => {
    const[games,setGames]=useState(null)
    const[isModalopen,setIsModalOpen]=useState(false)
    const dispatch=useDispatch()
    const[selectedGame,setSelectedGame]=useState(null)
    const[deleteModal,setDeleteModal]=useState(false)

const getData=async()=>{
    try {
        dispatch(showLoading())
        const res=await getAllGame()
        if(res.success){
            message.success(res.message)
            const allgames=res.data
            setGames(allgames.map((game)=>{
                return {...game,key:`${game._id}`}
            }))
            dispatch(hideLoading())
        }
        else{
            message.error(res.message)
            dispatch(hideLoading())
        }
    } catch (error) {
        console.log(error.message);
        dispatch(hideLoading())
        
    }
}
useEffect(()=>{
getData()
},[])
const columns=[
    {
        title:"Name",
        dataIndex:"name",
        key:"name"
        
    },
    {
        title:'Action',
        dataIndex:'action',
        render:(_,record)=>{
            return (
                <div className='delete'>
                    <Button onClick={()=>{
                        console.log('delelte');
                        setSelectedGame(record)
                        setDeleteModal(true)
                        
                        console.log(selectedGame,'deletebutton');
                        
                    }}>
                        <DeleteOutlined/>
                    </Button>
                </div>
            )
        }
    }
]

    useEffect(()=>{
        getData()
    },[])
  return (
   <>
   <Button onClick={()=>{
    console.log('adding game');
    
    setIsModalOpen(true)
   }}>Add </Button>
   <Table dataSource={games} columns={columns}/>
   {isModalopen && (<GameForm isModalopen={isModalopen}setIsModalOpen={setIsModalOpen}getData={getData}/>)}
   {deleteModal && <DeleteModal deleteModal={deleteModal}setDeleteModal={setDeleteModal}selectedGame={selectedGame}setSelectedGame={setSelectedGame}getData={getData}/>}
   </>
  )
}

export default GameList