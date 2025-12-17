import React, { useState } from 'react'
import './play.css'


const Play = () => {
  const [game,setGameType]=useState('All')
  return (
    <>
    <main className='play-cont'>
      <div className="play-div">
        <div className='play-head'>
          <div className='join-div'>
            <h1 className='font-style'>Join a Game</h1>
          </div> 
        </div>
        <div className='play-now'>
          <div className='game-arr'>
            <div className='game-list'>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    </>
  )
}

export default Play