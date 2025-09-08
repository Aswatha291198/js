import React, { useEffect, useState } from 'react'
import GameList from './GameList'
import TurfList from './TurfList'
import { hideLoading, showLoading, setUser } from '../../../redux/slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import './admin.css'
import { Avatar, Col, message } from 'antd'
import { CameraOutlined } from '@ant-design/icons';
import { GetCurrentUser } from '../../api/user'


const Admin = () => {
  const { user } = useSelector(state => state.users)
  const dispatch = useDispatch()
  const [view, setView] = useState('game')
  const [games, setGames] = useState(null)
  const [selectedGame, setSelectedGame] = useState(null)
  const[activeTab,setActiveTab]=useState('game')
  const getData = async () => {
    try {
      dispatch(showLoading())
      const response = await GetCurrentUser()
      if (response.success) {
        dispatch(setUser(response.data))
        message.success(response.message)
      }
      else {
        message.error(response.message)
      }
    } catch (error) {
      dispatch(hideLoading())
      console.log(error.message);
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <main className='admin-cont'>
        <div className='admin-div'>
          <section className='admin-sec'>
            <div className='admin-profile'>
              <div className='admin-img'>
                <div className='avatar-div'>
                  <Avatar
                    size={50}>
                    <CameraOutlined style={{
                      width: '20px',
                    }} />
                  </Avatar>
                </div>
                <div className='admin-info-div'>
                  <span className='admin-name'>{user?.name}</span>
                  <span>
                    {user?.email}
                  </span>
                </div>
              </div>
              <div className='admin-wrapper'>
                <div className='game-div'
                onClick={()=>{
                  setActiveTab('game')
                  setView('game')
                }}
                style={{
                  background:activeTab==='game'?'#1bc065ff':'white',
                  color:activeTab==='game'? 'white':'black'
                }}
                
                >
                  <div className='game-wrap'>
                    <span className='icon-wrap'><i className="fa-solid fa-gamepad game-icon"></i></span>
                    <span className='game-txt'>Game</span>
                  </div>
                </div>
                <div className='turf-div'
                onClick={()=>{
                  setActiveTab('turf')
                  setView('turf')
                }}
                style={{
                  background:activeTab==='turf'?'#1bc065ff':'white',
                  color:activeTab==='turf'? 'white':'black'
                }}>
                  <div className='turf-wrap'>
                    <span className='icon-wrap'> <i className="fa-regular fa-futbol turf-icon"></i></span>
                    <span className='turf-txt'>Turfs</span>
                  </div>
                </div>
                <div className='edit-div'
                onClick={()=>{
                  setActiveTab('edit')
                  setView('edit')
                }}
                style={{
                  background:activeTab==='edit'?'#1bc065ff':'white',
                  color:activeTab==='edit'? 'white':'black'
                }}>
                  <div className='edit-wrap'>
                    <span className='edit-icon'><i className="fa-solid fa-pen pen-icon"></i></span>
                  <span className='edit-span'>Edit Profile</span>
                  </div>
                </div>
              </div>

            </div>
          </section>
          <section className='admin-disp'>
            <div className='admin-dis-div'>
              {view==="game" &&(<GameList/>)}
              {view==="turf" && (<TurfList/>)}
              {view==='edit' &&(
                <>
                <div>
                  <Form>
                    <Row>
                      <Col></Col>
                    </Row>
                  </Form>
                </div>
                
                </>
              )}
            </div>
          </section>
        </div>
      </main>


    </>
  )
}

export default Admin