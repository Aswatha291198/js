import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading, hideLoading } from '../../../redux/slice/userSlice'
import { getAllGame } from '../../api/game'
import { Button, Card, message } from 'antd'
import './gamelist.css'
import GameForm from './GameForm'

const GameList = () => {
  const [game, setGame] = useState(null)
  const { user } = useSelector(state => state.users)
  const dispatch = useDispatch()
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formType, setFormType] = useState('add')

  const getData = async () => {
    try {
      dispatch(showLoading())
      const response = await getAllGame()
      if (response.success) {
        const allgames = response.data
        message.success(response.message)
        setGame(allgames.map((game) => {
          return {
            ...game,
            key: `game${game._id}`
          }
        }))
      }
      else {
        message.error(response.message)
      }
      dispatch(hideLoading())
    } catch (error) {
      console.log(error.message);
      dispatch(hideLoading())
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div className='game-display'>
        <h1 className='manage-text'>Manage Turfs</h1>
      </div>
      <div className='add-game'>
        <Button type='primary' className='custom-btn' onClick={() => {
          setIsModalOpen(true)
          setFormType('add')

        }}>Add game</Button>
      </div>
      <div className='game-cont'>
        {game && game.map((item) => {
          return(
          <Card
            key={item._id}
            title={item.name}
            className='custom-card'
            variant='borderless'
            onClick={() => { setSelectedGame(item) }}
          >
            <div className='btn-div'>
              
              <Button
              onClick={()=>{setFormType('edit')
                            setIsModalOpen(true)
                            setSelectedGame(item)
              }
              }
              >Edit</Button>
              <Button>Delete</Button>
            </div>
          </Card>
        )})}
      </div>
      {isModalOpen && (<GameForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedGame={selectedGame} setSelectedGame={setSelectedGame} getData={getData} formType={formType} />)}
    </>
  )
}

export default GameList