import React, { useEffect, useState } from 'react'
import './ProtectedRoute.css'
import { Input, message, Drawer } from 'antd'
import logo from '../logo/logo.png'
import ShowSider from './ShowSider'
import { Link, useNavigate } from 'react-router-dom'
import { setUser, hideLoading, showLoading } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { GetCurrentUser } from '../api/user'
import { SearchOutlined, BellOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons'

const ProtectedRoute = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(state => state.users)
  const [sider, setSider] = useState(false)
  const HandleProfile = () => {
    setSider(prev => !prev)

  }
  useEffect(() => {

    const getUser = async () => {
      try {
        const response = await GetCurrentUser()
        if (response.success) {
          dispatch(showLoading())
          console.log('user', response.data.name)
          if (response.data.role === 'candidate') {
            dispatch(setUser(response.data))
            navigate('/userProfile')
          }
          else {
            dispatch(setUser(response.data))
            navigate('/recruiter')
          }
          console.log(response.data, response)
          message.success(response.message)
          dispatch(hideLoading())
        }
        else {

          message.error(response.message)
        }


      } catch (error) {
        dispatch(hideLoading())
        console.log(error);

      }
    }
    getUser()
  }, [])
  return (
    <>
      <header className='navbar-container'>
        <div className='space'></div>
        <div className='logo-container'>
          <Link to='/'> <img src={logo} alt="logo" style={{ height: '40px', borderRadius: '20px', color: 'skyblue' }} /></Link>
          <h2 className='salez'>Salez</h2>
        </div>
        <nav className='navbar'>
          <ul className='nav-header'>
            <Link className='li' to='/jobs'><li >Jobs</li></Link>
            <Link className='li' to='/companies'><li>Companies</li></Link>
            <Link className='li' to='/services'><li >Services</li></Link>
          </ul>
        </nav>
        <div className='input-header'>
          <div className='input-div'>
            <Input
              className="input"
              placeholder="Search job"
              suffix={<SearchOutlined className='icon' />}
            />
          </div>
        </div>
        <div className='bell'>
          <BellOutlined />
        </div>
        <div className='SZ'>
          <span className='name'>SZ</span>
          <span className='carrier'>CARRER</span>
        </div>
        <div className='profile' onClick={HandleProfile}>
          <UserOutlined className='bell-icon' />

          {user && <div className='user'>{user.name}</div>}
        </div>

        {sider && <ShowSider sider={sider} setSider={setSider} />}
      </header >

    </>
  )
}

export default ProtectedRoute