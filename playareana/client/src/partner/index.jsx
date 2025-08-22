
import React, { useEffect, useState } from 'react'
import { hideLoading, showLoading, setUser } from '../../redux/slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Col, message } from 'antd'
import { CameraOutlined,StarOutlined } from '@ant-design/icons';
import { GetCurrentUser } from '../api/user'
import './tabs.css'
import Turfs from './Turf';
import Reviews from './Reviews';


const Owner = () => {
  const { user } = useSelector(state => state.users)
  const dispatch = useDispatch()
  const [view, setView] = useState('turf')
  const [games, setGames] = useState(null)
  
  const[activeTab,setActiveTab]=useState('turf')
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
   
      <main className='owner-cont'>
        <div className='owner-div'>
          <section className='owner-sec'>
            <div className='owner-profile'>
              <div className='owner-img'>
                <div className='ava-div'>
                  <Avatar
                    size={50}>
                    <CameraOutlined style={{
                      width: '20px',
                    }} />
                  </Avatar>
                </div>
                <div className='owner-info-div'>
                  <span className='owner-name'>{user?.name}</span>
                  <span>
                    {user?.email}
                  </span>
                </div>
              </div>
              <div className='owner-wrapper'>
                <div className='turf-div'
                onClick={()=>{
                  setActiveTab('turf')
                  setView('turf')
                }}
                style={{
                  background:activeTab==='turf'?'#1bc065ff':'white',
                  color:activeTab==='turf'? 'white':'black'
                }}
                
                >
                  <div className='turf-wrap'>
                    <span className='turf-icon-wrap'><i className="fa-solid fa-gamepad turf-icon"></i></span>
                    <span className='turf-txt'>My Turfs</span>
                  </div>
                </div>
                <div className='reviews-div'
                onClick={()=>{
                  setActiveTab('reviews')
                  setView('reviews')
                }}
                style={{
                  background:activeTab==='reviews'?'#1bc065ff':'white',
                  color:activeTab==='reviews'? 'white':'black'
                }}>
                  <div className='reviews-wrap'>
                    <span className='reviews-icon-wrap'> 
                      <StarOutlined className='reviews-icon'/>.
                    </span>
                    <span className='reviews-txt'>Reviews</span>
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
          <section className='owner-disp'>
            <div className='owner-dis-div'>
              {view==="turf" &&(<Turfs/>)}
              {view==="reviews" && (<Reviews/>)}
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

export default Owner
