import React, { useState } from 'react'
import './user.css'
import { useEffect } from 'react'
import { setUser, hideLoading, showLoading } from '../../../redux/slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { GetCurrentUser, updateuser } from '../../api/user'
import { Avatar, Button, Form, Input, message } from 'antd'

const UserProfile = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(store => store.users)
  const [bookings, setBookings] = useState(null)
  const [display, setDisplay] = useState("bookings")
  
  const onFinish=async(values)=>{
    try {
      dispatch(showLoading())
      const res=await updateuser({id:user._id,...values})
      if(res.success){
        message.success(res.message)
        getUser()
        dispatch(hideLoading())
      }
    } catch (error) {
      dispatch(hideLoading())
      console.log(error);
      
    }}
  
    const getUser = async () => {
      try {
        const response = await GetCurrentUser()
        dispatch(hideLoading())
        if (response.success) {
          dispatch(setUser(response.data))
          dispatch(hideLoading())
        }
      } catch (error) {
        dispatch(hideLoading())
      }
    }
  useEffect(()=>{
    getUser()
  },[])
  return (
    <>
      <main className='user-cont'>
        <div className='user-div-cont'>
          <section className='user-pro-div'>
            <div className='profile-wrap'>
              <div className='image-cont'>
                <Avatar
                  size={60}

                />
              </div>
              <div className='text-pro-div'>
                <h3>{user?.name}</h3>
                <h3>{user?.email}</h3>

              </div>
            </div>
            <div className='booking-cont' onClick={() => setDisplay('booking')}>
              <div className='booking-wrap'>
                <i className="fa-regular fa-bookmark book-icon"></i>
                <span className='booking-text'>Bookings</span>
              </div>
            </div>
            <div className='booking-cont' onClick={() => setDisplay('edit')}>
              <div className='booking-wrap'>
                <i className="fa-solid fa-pencil book-icon"></i>
                <span className='booking-text'>Edit Profile</span>
              </div>
            </div>

            <div className='booking-cont' onClick={() => setDisplay('feedback')}>
              <div className='booking-wrap'>
                <i class="fa-regular fa-comment book-icon"></i>
                <span className='booking-text'>FeedBack</span>
              </div>
            </div>
          </section>
          <section className='display-container'>
            <div className='display-main'>
              {display === 'booking' && (
                <div className='booking-container'>
                  <div className='book-wrap'>
                    <div className='allbooking'></div>

                  </div>  </div>
              )}
              {display === 'edit' && (
                <>
                  <div className='title-div'>

                    <div className='banner-div-pro'>
                      <div className='banner-div-one'></div>
                      <div className='banner-div-two'>
                        <Avatar
                          size={100}
                          src="https://randomuser.me/api/portraits/men/32.jpg" />
                      </div>
                      <div className='banner-div-three'></div>
                    </div>
                    <div className='form-div'>
                      <Form
                        layout='horizontal'
                        initialValues={{
                          name: user?.name,
                          email: user?.email,
                        }}
                        onFinish={onFinish}>
                        <Form.Item
                          label='name'
                          name='name'>
                          <Input />
                        </Form.Item>
                        <Form.Item
                          label='email'
                          name='email'>
                          <Input />
                        </Form.Item>
                        <Form.Item>
                          <Button type='primary'
                          htmlType='submit'>Update</Button>
                        </Form.Item>

                      </Form>
                    </div>
                  </div></>
              )}
            </div>
          </section>
        </div>
      </main>
    </>

  )

}

export default UserProfile