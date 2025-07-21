import React, { useEffect } from 'react'
import logo from '../logo/logo.png'
import './ProtectedRoute.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { hideLoading, setUser, showLoading } from '../redux/userSlice'
import { Menu, Layout } from 'antd'
import { LogoutOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons'
import { CurrentUser } from '../api/user'


const ProtectedRoute = ({children}) => {
  const { user } = useSelector(state => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const navItems = [
  {
    key: "home",
    label: <Link to="/">Home</Link>,
  },
  {
    key: "user-menu",
    label: `${user ? user?.name : ""}`,
    icon: <UserOutlined />,
    children: [
      {
        key: "my-profile",
        label: (
          <span
            onClick={() => {
              if (user.role === "admin") {
                navigate("/admin");
              } else if (user.role === "recruiter") {
                navigate("/recruiter");
              } else {
                navigate("/candidate");
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

  useEffect(() => {
    const getValiduser = async () => {
      try {
        dispatch(showLoading())
        const response = await CurrentUser()
        console.log('user is fetching');
        dispatch(setUser(response.data))
        dispatch(hideLoading())

      } catch (error) {
        console.log("user is not a valid user");

      }
    }
    if (localStorage.getItem("token")) {
      getValiduser()
    }
    else {
      navigate('/login')
    }
  }, [])
  const { Header } = Layout
  return (
    <>
      <Layout>
        <Header className='nav-container'>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <Menu mode='horizontal'
            theme='dark'
            className='custom-menu'
            items={navItems} />
        </Header>
         <div style={{ padding: 24, minHeight: 380, background: "#fff" }}>
            {children}
          </div>
      </Layout>
    </>
  )
}

export default ProtectedRoute