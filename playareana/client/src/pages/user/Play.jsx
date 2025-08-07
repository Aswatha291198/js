import React, { useState } from 'react'
import './play.css'
import{Select,Row,Col} from 'antd'


const Play = () => {
  const [games,setGames]=useState(null)
  const[location,setLocation]=useState("bangalore")
  return (
    <>
      <main className='play-container'>
        <div className='play-cont'>
          <section className='play-section-cont'>           
            <div className='text-div'>
              <div className='play-1'>
             <h1 className='games'>Games in <span className='game'>{location}</span></h1>
            </div>
              </div>
              <div className='items-div'>
              <div className='items-wrap'>
                <div>
                 <Row>
                  <Col span={8}>
                  <Select id ='game' name='game'
                  placeholder="Select a game"
                  options={games.map((game)=>({
                    key:game?._id,
                    value:game?._id,
                    label:game?.name
                  }))}>
                    
                  </Select>
                  </Col>
                 </Row>
                 
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              </div>
            
          </section>
        </div>
      </main>


    </>
  )
}

export default Play