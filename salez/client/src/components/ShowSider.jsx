import React from 'react'
import './showsider.css'
import logo from '../logo/logo.png'
import { Link, useNavigate } from 'react-router-dom'


const ShowSider = ({ sider, setSider }) => {
    console.log('welcome to showsider');
    
    const navigate = useNavigate()
    if (!sider) return null

    return (
        <>
        <div className='container'>
            <div></div>
        </div>
                 
              </>
    )
}

export default ShowSider
