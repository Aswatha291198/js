import React from 'react'
import { useSelector } from 'react-redux';
import x from '../../assets/X.png'
import {useNavigate} from 'react-router-dom'
import stadium from '../../assets/soccer-field.png'

const Home = () => {

  const {user}=useSelector(store=>store.users)
  const navigate=useNavigate()
console.log(user?.role);

  return (
    <>
    <main className='home-cont'>
      <div className='home-div'>
       <div className='hero-div'>
        <img src='' alt="x" 
        style={{width:'80%'}} />
       </div>
       <div className='hero-cont'>
        <div className='hero-h1'>
          <h1>PLAY SPORTS</h1>
        </div>
        <div className='hero-h2 font-style'>
          <h2>Whenever You Want</h2>
        </div>
        <div className='hero-btn'>
          <button className='hero-btn-spn'
          onClick={()=>navigate('/play')}>
            <span className='font-style cursor-pointer'
            >Play Now  </span>
          </button>
        </div>
       </div>
      </div>
      <div className='banner-cont'>
        <div className='banner-div'>
        <div className='banner-img'>
          <img src={x} alt="x"/>
        </div>
        <div className='banner-text'>
          <span className='font-style '>
            FIND, JOIN, AND PLAY THE GAME
          </span>
          <h2  className='font-style'>Welcome to Turfo</h2>
          <p>We make playing your favourite sport ridiculously easy for thousands of players across India. With daily games in your city, getting back in action is just faster than your crush’s reply. No team? No problem. Just show up, play hard, and make friends along the way. We’re the home of clutch moments, friendly rivalries, and zero judgment since day one.</p>
        </div>
        </div>
      </div>

      <div className='e-cont'>
        <div className="e-div">
          <h1
          className='font-poppins'
          style={{
            color:'white',
            letterSpacing:'0.5px',
            fontSize:'35px',
            height:"20px",
              
            position:'relative',
            bottom:'30px'
          }}>Turfo Ethos</h1>
          <div className="div1"
          >
            <div className="e1">
             <div className='e1-cont'>
               <i className="fa-regular fa-square-check"
              style={{
                color:"white",
                fontSize:"40px",
                marginTop:'10px'
              }}></i>
             </div>
             <div className="e1-text">
              <h2 className='font-poppins'>
                Play Without Barriers
              </h2>
              <p>
                No age limits, no skill requirements, and no pressure to be perfect. At Sports Social, if you’ve got a love for the game, you’ve got a place. With matches in your neighbourhood, we make it easier than ever for anyone to show up and play. Anytime. Anywhere.
              </p>
             </div>
            </div>
            <div className="e1">
              <div className='e1-cont'>
               <i className="fa-solid fa-globe"
              style={{
                color:"white",
                fontSize:"40px",
                marginTop:'12px'
              }}></i>
             </div>
             <div className="e1-text">
              <h2 className='font-poppins'>
                Connecting Diverse Players
              </h2>
              <p>
                We bring together students, professionals, travellers, and locals through the shared love for sports. Different backgrounds, one pitch. We help players reconnect with the joy of the game for those who’ve decided it’s time to fall back in love with playing again.
              </p>
             </div>
            </div>
            <div className="e1">
             <div className='e1-cont'>
               <i className="fa-regular fa-user"
              style={{
                color:"white",
                fontSize:"40px",
                marginTop:'10px'
              }}></i>
             </div>
             <div className="e1-text">
              <h2 className='font-poppins'>
                Keep the Game Alive
              </h2>
              <p>
                Life gets busy, but the game doesn’t have to stop. We’re here to remind you that play is essential, not optional. Every match is a break from the routine, a dose of energy, and a boost to your mental and physical well-being. This is more than just Sports, it’s fuel for life!
              </p>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div className="choose">
        <div className="choose-cont">
          <h2>
            Why Choose Us
          </h2>
        <span>Always Find a Game</span>
        <span>
          Play With Anyone, Anytime
        </span>
        <span>
          A Real Sports Community
        </span>
        </div>
<div className="stadium-cont">
  <img src={stadium }
  style={{ transform: "rotate(90deg)",
    position:'relative',
    bottom:'40px'
   }}
  alt="" />
</div>
      </div>

    </main>
    </>
  )
}

export default Home