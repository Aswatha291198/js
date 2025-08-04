import React, { useEffect, useState } from 'react'
import './ProtectedRoute.css'
import{message} from 'antd'
import logo from '../logo/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { setUser, hideLoading, showLoading } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { GetCurrentUser } from '../api/user'
import ShowSider from './ShowSider'

const ProtectedRoute = ({children}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.users)
    const [sider, setSider] = useState(false)
    
    const HandleProfile = () => {
        console.log(sider,'trueorfalse');
        
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
            <header className='header'>
                <nav className='navbar'>
                    <div className='space'></div>
                    <div className='image-wrap'>
                        <img src={logo} alt="logo" className='logo' />
                        <h2 className='logo-name'>Salez</h2>
                    </div>
                    <ul className='nav-items'>
                        {user?.role === 'candidate' && (
                            <>

                                <li>  <Link className='li' to='/jobs'><span>Jobs</span></Link></li>
                                <li> <Link className='li' to='/companies'><span>Companies</span></Link></li>
                                <li> <Link className='li' to='/services'><span>Services</span></Link></li>
                            </>
                        )}
                        {user?.role === 'recruiter' && (
                            <>
                                <Link className='li' to='/post-job'><li>Post Job</li></Link>
                                <Link className='li' to='/candidates'><li>Candidates</li></Link>
                                <Link className='li' to='/companies'><li>Plans</li></Link>
                            </>
                        )}
                    </ul>
                    <div className='input-wrap'>
                        <input type="text" placeholder='search' className='input-nav'  />
                        <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    </div>
                    <div className='bell-wrap'><i className="fa-regular  fa-bell bell-icon"></i></div>
                    <div className='user-wrap' onClick={HandleProfile}><i className="fa-solid fa-user"></i></div>
                </nav>
            </header>
            {sider && <ShowSider setSider={setSider}sider={sider}/>}      
            <div style={{ padding: 24, minHeight: 380 }}>
            {children}
          </div>
        </>
    )
}

export default ProtectedRoute