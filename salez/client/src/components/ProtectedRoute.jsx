import React, { useEffect } from 'react'
import './ProtectedRoute.css'
import {Link,useNavigate} from 'react-router-dom'
import { Menu, Layout } from 'antd'
import { HomeOutlined, LogoutOutlined,ProfileOutlined,UserOutlined} from '@ant-design/icons'
import { setUser, showLoading, hideLoading } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Header } from 'antd/es/layout/layout'
import logo from '../logo/logo.png'
import { GetCurrentUser } from '../api/user'


const ProtectedRoute = ({children}) => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const { user } = useSelector(state => state.users)
  useEffect(() => {
    const getUser = async () => {
      try {
        dispatch(showLoading())
        console.log('user is fetching');
        
        const response = await GetCurrentUser()
        console.log(response.data);
        
        dispatch(setUser(response.data))
        console.log(user,'user');
        
        dispatch(hideLoading())
      } catch (error) {
          console.log(error);
          dispatch(hideLoading())       
      }
    }
    getUser()
  },[])
  const navItems = [
  {
    key: "home",
    label: "Home",
    icon: <HomeOutlined />,
  },
  {
    key: "user",
    label: `${user ? user?.name : ""}`,
    icon: <UserOutlined />,
    children: [
      {
        key: "profile",
        label: (
          <span
            onClick={() => {
              if (user?.role === "admin") {
                navigate("/admin");
              } else if (user?.role === "recruiter") {
                navigate("/partner");
              } else {
                navigate("/profile");
              }
            }}
          >
            My Profile
          </span>
        ),
        icon: <ProfileOutlined />,
      },
      {
        key: "logout",
        label: (
          <Link
            to="/login"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            Logout
          </Link>
        ),
        icon: <LogoutOutlined />,
      },
    ],
  },
];

  return (
    <>
      <Layout>
        <Header className='nav-header'>
          <div>
            <img src={logo} alt="logo" className='logo' /></div>


           {user && <Menu theme='light' mode='horizontal' items={navItems} />
}
        </Header>



      </Layout>
      <div>{children}</div>

    </>
  )
}

export default ProtectedRoute