import React, { useState } from 'react'
import './home.css'
import kick from '../home/kick.png'
import {useSelector,useDispatch} from 'react-redux'
import {hideLoading,showLoading} from  '../../../redux/slice/userSlice'
import { getAllTurf } from '../../api/turf'
import group from '../../assets/group.png'
import support from '../../assets/support.png'

const Home = () => {
  const[turfs,setTurs]=useState(null)
  const dispatch=useDispatch()
  const {user}=useSelector(store=>store.users)

  return (
    <>
   <main className='container'>
    <section className='section-cont'>
      <div className='content-div'>
         <div className='space-div'>
          <div className='first-div'>
          <div className='blocking'></div>
          
          <h1 className='content-info'>Explore Playing Communiteis</h1>
          <p className='content-para'>Connect, play, and grow with like-minded sports enthusiasts around you</p>
        </div>
         </div>
        
        <div className='second-div'>
          <div className='second-div-img'>
            <img src={kick} alt="kick" className='kick' />
          </div>
        </div>
      </div>
    </section>

  
      <section className='choose-container'>
        {user.role==='player' && (
          <>
        <div className='connect'>
          <div className='connect-img'>
            <img src={group} alt="gropu" className='group' />
          </div>
          <div className='connect-wrap'>
            <span className='connect-text'>Easy To Connect</span>
          </div>
          <div className='connect-texts-div'>
            <h3 className='connect-texts'>Book, play, and enjoy without boundaries</h3>
          </div>
        </div>

        <div className='connect'>
          <div className='connect-img'>
            <img src={support} alt="gropu" className='group' />
          </div>
          <div className='connect-wrap'>
            <span className='connect-text'>Customer Support</span>
          </div>
          <div className='connect-texts-div'>
            <h3 className='connect-texts-supports'>Reliable support to assist you at every step</h3>
          </div>
        </div>
        <div className='connect'>
        </div>
          
          </>
        )}
      </section>
  
   </main>
    </>
  )
}

export default Home