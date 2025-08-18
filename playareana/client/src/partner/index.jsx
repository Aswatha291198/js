import React from 'react'
import { useState, useEffect } from 'react'
import { hideLoading, showLoading } from '../../redux/slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import './tabs.css'
import { Avatar, message } from 'antd'
import { CameraOutlined } from "@ant-design/icons";
import { getAllturfOwner } from '../api/turf'



const Owner = () => {
  const [turf, setTurf] = useState(null)
  const { user } = useSelector(state => state.users)
  const dispatch = useDispatch()

  const getData = async () => {
    try {
      dispatch(showLoading())
      const res = await getAllturfOwner(user._id)
      console.log(res);
      if (res.success) {
        const turfs = res.data
        setTurf(turfs.map((turf) => {
          return {
            ...turf,
            key: `turf${turf._id}`
          }
        }))
      }
      else {
        message.error(res.message)
      }
      dispatch(hideLoading())
    } catch (error) {
      dispatch(hideLoading())
      console.log(error.message);
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <main className='owner-cont'>
      <div className='owner-div'>
        <section className='owner-info'>
          <div className='owner-name'>
            <div className='owner-img'>
              <Avatar
                size={100}
                className='avatar'>
                <CameraOutlined />
              </Avatar>
            </div>
            {user && (
              <div className='owner-txt'>
                <h2 className='turf-owner'>{user.name}</h2>
              </div>
            )}

          </div>

        </section>
      </div>
    </main>
  )
}

export default Owner