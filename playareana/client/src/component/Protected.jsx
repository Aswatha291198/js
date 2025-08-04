import React, { useState, useEffect } from 'react'
import './protected.css'
import brand from './brand.png'
import { message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineUser } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux'
import { setUser, hideLoading, showLoading } from '../../redux/slice/userSlice';
import { GetCurrentUser } from '../api/user';
import { Menu, Layout } from 'antd'
import { ProfileOutlined, UserOutlined,LogoutOutlined } from '@ant-design/icons'

const Protected = ({ children }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const { user } = useSelector(store => store.users)
 const navItems = [
  {
    key: 'user',
    label: `${user ? user.name : ""}`,
    icon: <UserOutlined />,
    children: [
      {
        key: 'profile',
        label: "My Profile",
        icon: <ProfileOutlined />,
        onClick: () => {
          if (user.role === "admin") {
            navigate("/admin");
          } else if (user.role === "partner") {
            navigate("/partner");
          } else {
            navigate("/userprofile");
          }
        },
      },
      {
        key: 'logout',
        label: "Logout",
        icon: <LogoutOutlined />,
        onClick: () => {
          localStorage.removeItem("token");
          navigate("/login");
        },
      },
    ],
  },
];


  useEffect(() => {
    const getdata = async () => {
      try {
        dispatch(showLoading())
        console.log('getting user info');

        const response = await GetCurrentUser()
        if (response.success) {
          dispatch(setUser(response.data))

          message.success(response.message)
          dispatch(hideLoading())
        }
        else {
          message.error(response.message)
          dispatch(hideLoading())
        }

      } catch (error) {
        dispatch(hideLoading())
      }
    }
    getdata()
  }, [])

  return (
    <>
      <header className="header">
        <nav className='navbar'>
          <div className='space'>
            <div className='logo-wrap'><Link to ='/'><img src={brand} alt="brand" className='logo' /></Link></div>
          </div>
          <ul className='nav-ul'>
            <li className='name-wrap'><Link className='li' to='/play' >Play</Link></li>
            <li className='name-wrap'><Link className='li' >Book</Link></li>
            <li className='name-wrap'><Link className='li' >Train</Link></li>
          </ul>


          {user &&<Menu theme='light' mode='horizontal' items={navItems} className='custom-menu' />}


        </nav>
      </header>

      <div style={{  minHeight: 380, background: "#fff" }}>
        {children}
      </div>
    </>
  )
}

export default Protected