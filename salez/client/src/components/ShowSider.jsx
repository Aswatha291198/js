import React from 'react'
import './showsider.css'
import logo from '../logo/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { InfoCircleOutlined,PhoneOutlined } from '@ant-design/icons'

const ShowSider = ({ sider, setSider }) => {
    const navigate = useNavigate()
    if (!sider) return null

    return (
        <>
            <div className='overlay' onClick={() => setSider(false)}></div>

            <div className='wrapper' onClick={(e) => e.stopPropagation()}>
                <div className='profile'>
                    <div className='profile-wrapper'>
                        <div className='image'>
                            <img src={logo} alt="logo" className='logo' />
                        </div>
                        <div className='info'>
                            <h2>Aswatha</h2>
                            <h5>current designation</h5>
                            <h4 className='view' onClick={() => navigate('/profile')}>View & Update profile</h4>
                        </div>
                    </div>
                    <div className='performance-wrapper'>
                        <div className='your'>Your Performance</div>
                        <div className='days'>Last 90 days</div>
                    </div>
                    <div className='nav-div'>

                        <ul className='nav-ul'>
                            <li >
                                <Link className='li' to='/about'><InfoCircleOutlined /> About Us</Link>
                            </li>
                            <li >
                                <Link className='li' to='/contact'><PhoneOutlined/> Contact</Link>
                            </li>
                            <li >
                                <Link  className='li'to='/faq'>FAQ</Link>
                            </li>
                            <li >
                                <Link  to ='/login'onClick={()=>localStorage.removeItem("token")
                                    
                                } className='li' >Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default ShowSider
