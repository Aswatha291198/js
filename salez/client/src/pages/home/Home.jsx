import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import Banner1 from '../../Banner/Banner1.png'
import Banner2 from '../../Banner/Banner2.png'
import './home.css'
import logo from '../../logo/logo.png'


const Home = () => {
  const hero = [Banner1, Banner2]
  const { Sider } = Layout
  const[idx,setIdx]= useState(0)


  useEffect(()=>{
      const timer=setInterval(()=>{
          setIdx(prev=>prev+1 % hero.length)
      },2000)
      return ()=>{
        clearInterval(timer)
      }
  },[hero.length])
  return (
    <>
    <div className='container'>
      <main className='divider'>
        <div className='profile'>
          <div className='profile-container'>
            <img src={`${hero[idx]}`} alt="" className='profile-image' />
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default Home