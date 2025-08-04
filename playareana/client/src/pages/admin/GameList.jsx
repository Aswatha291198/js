import React, { useState } from 'react'
import { Table,Button } from 'antd'
import GameForm from './GameForm';

const GameList = () => {
    const [game,setGame]=useState('cri')
    onst [isModalOpen, setIsModalOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const[formType,setFormType]=useState('add')

    const tableHeading=[
        {
            title:"name",
            dataIndex:"name",
          
        }
    ]
    
  return (
    <>
    <Button onClick={()=>{
        setIsModalOpen(true)
        setFormType('add')
    }}>Add</Button>
    <Table DataSource={game} columns={tableHeading}/>
    {isModalOpen && (<GameForm formType={formType}isModalOpen={isModalOpen}setIsModalOpen={setIsModalOpen}/>)}
    </>



  )
}

export default GameList