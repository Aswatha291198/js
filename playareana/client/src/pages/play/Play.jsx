import React, { useEffect, useState } from 'react'
import { DatePicker, Dropdown } from 'antd'
import { useSearchParams } from 'react-router-dom'
import { getGroupgameByCity } from '../../api/book'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons'
import moment from 'moment'
import { GiWhistle } from "react-icons/gi"
import { hideLoading, showLoading } from '../../../redux/slice/userSlice'
import { getAllGame } from '../../api/game'


const Play = () => {
  const [searchParams] = useSearchParams()
  const city = searchParams.get('city')
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
  const [venue, setVenue] = useState([])
  const [open, setOpen] = useState(false)
  const [games, setGames] = useState([])
  const [selectedGame, setSelectedGame] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getData = async () => {
    try {
      dispatch(showLoading())
      const gameResponse = await getAllGame()
      let response
      if(selectedGame){
        console.log(selectedGame,'fam');
        
        response=await getGroupgameByCity(city,selectedGame)
      }
    
    else{
      response=await getGroupgameByCity(city)
    }
      if(response){
        setVenue(response.data)

      }
      if (gameResponse.success) {
        setGames(gameResponse.data)
      }
    } catch (error) {
      console.log(error.message)
    } finally {
      dispatch(hideLoading())
    }
  }
console.log(venue,'venue');

  useEffect(() => {
    getData()
  }, [city,selectedGame])

  const handleDateChange = (date) => {
    setDate(moment(date).format('YYYY-MM-DD'))
  }

  const handleGameSelect = (game) => {
    setSelectedGame(game.name)
    setOpen(false) // close dropdown on select
  }

  return (
    <>
      <main className='flex-c gp-10'>
        <section className='d-f-center h-1 w-1'>
          <h1 className='font-p ls mt mr-3'>Games in {city}</h1>
        </section>
        <section>
          <div className='m-20 d-flex justify-content-between'>

            
            <div className='bor'
            style={{   
              display: 'flex',
              alignItems: 'center',
            backgroundColor:'white' }
          
          }>
              <DatePicker
                className='font-p f-6 c-p'
                placeholder='Date'
                inputReadOnly
                disabledDate={(current) => current && current < moment().startOf('day')}
                suffixIcon={<DownOutlined />}
                format='YYYY-MM-DD'
                onChange={handleDateChange}
                variant='borderless'
              />
            </div>
          <div className='w-color bor'>
            <Dropdown
              trigger={['click']}
              placement="bottomLeft"
              open={open}
              onOpenChange={(flag) => setOpen(flag)}
              popupRender={() => (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 150,
                  backgroundColor: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  padding: '5px 0'
                }}>
                  {games && games.map((game) => (
                    <div
                      key={game._id}
                      onClick={() => handleGameSelect(game)}
                      style={{
                        padding: '8px 15px',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                    >
                      {game.name} {/* fix: use game.name not game */}
                    </div>
                  ))}
                </div>
              )}
            >
              <div
                className='border-black c-p d-flex text-center'
                style={{
                  height: 40,
                  borderRadius: 10,
                  width: 200,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  padding: '0 10px',
                  cursor: 'pointer'
                }}
              >
                <GiWhistle 
                className='font-larger b-color'
                />
                <span className='font-p f-6'>{selectedGame ? selectedGame : 'Sport'}</span>
                <DownOutlined />
              </div>
            </Dropdown>
          </div>
         </div>
        </section>
        <section>
      <div className='red'>
        {
          venue && venue.map((ve)=>{
          return   <div
            key={ve._d}
            className='red'
            >
<div>{ve.turf.city.name}</div>
            </div>
          })
        }
      </div>
        </section>
      </main>
    </>
  )
}

export default Play