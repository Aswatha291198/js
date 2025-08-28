import React, { useEffect, useState } from 'react'
import './home.css'
import kick from '../home/kick.png'
import { useSelector, useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../../../redux/slice/userSlice'
import { getAllTurf } from '../../api/turf'
import group from '../../assets/group.png'
import support from '../../assets/support.png'
import trophy from '../../assets/trophy.png'
import coach from '../../assets/coach.png'
import { getAllGame } from '../../api/game'
import { message } from 'antd'
import Footer from '../footer/Footer'


const Home = () => {
  const [turfs, setTurs] = useState(null)
  const dispatch = useDispatch()
  const { user } = useSelector(store => store.users)
  const [sport, setSports] = useState(null)

  const getSport = async () => {
    try {
      dispatch(showLoading())
      const response = await getAllGame()
      if (response.success) {
        const allgames = response.data
        setSports(allgames.map((game) => {
          return {
            ...game,
            key: `game${game._id}`
          }
        }))
      }
      else {
        message.error(response.message)
      }
      dispatch(hideLoading())
    } catch (error) {
      dispatch(hideLoading())
      console.log(error.message);
    }
  }
  useEffect(() => {
    getSport()
  }, [])

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
        <section className='tournement-div-home'>
          {user && user.role === 'player' && (
            <div className='div-wrap'>
              <div className='lead-name'>
                <h1 className='be'>Be the Game <span className='color'>Changer</span></h1>
              </div>
            </div>
          )}
          <div className='content-row'>
            {user && user.role === 'player' && (
              <>
                <div className='start'>
                  <div className='start-div'>
                    <div className='start-img'>
                      <div className='trophy'>
                        <span className='tro-span'><img src={trophy} alt="tro" className='tro' /></span>
                      </div>
                    </div>
                    <div className='start-name'>
                      <h2 className='kick'>Kickstart a Tournament  </h2>
                      <p className='kick-p'>Create your own league and crown the champions</p>
                    </div>
                    <div className='start-btn'>
                      <button className='btn-str'>Start</button>
                    </div>

                  </div>
                </div>
                <div className='start'>
                  <div className='start-div'>
                    <div className='start-img'>
                      <div className='trophy '>
                        <span><img src={coach} alt="c" className='coach' /></span>
                      </div>
                      <div>

                      </div>
                    </div>
                    <div className='start-name'>
                      <h2 className='kick-h'>Step In as a Trainer</h2>
                      <p className='kick-t'>Turn passion into guidance, and players into legends.</p>
                    </div>
                    <div className='start-btn'>
                      <button className='btn-str'>Start</button>
                    </div>
                  </div>

                </div>
              </>
            )}
            {user && user.role === 'owner' &&(
                    <div className='div-wrap'>
        <div className='lead-name'>
          <h1 className='be'>Own a Turf? Manage it  <span className='color'>Smarter</span></h1>
        </div>
      </div>
            )}
            {user && user.role === 'owner' && (

              <>
                <div className='start'>
                  <div className='start-div'>
                    <div className='start-img'>
                      <div className='trophy'>
                        <span className='tro-span'><img src={trophy} alt="tro" className='tro' /></span>
                      </div>
                    </div>
                    <div className='start-name'>
                      <h2 className='kick'>List Your Turf  </h2>
                      <p className='kick-p'>Showcase your venue and attract more players effortlessly</p>
                    </div>
                    <div className='start-btn'>
                      <button className='btn-str'>Start</button>
                    </div>

                  </div>
                </div>
                <div className='start'>
                  <div className='start-div'>
                    <div className='start-img'>
                      <div className='trophy '>
                        <span><img src={coach} alt="c" className='coach' /></span>
                      </div>
                      <div>

                      </div>
                    </div>
                    <div className='start-name'>
                      <h2 className='kick-h'>Manage with Ease</h2>
                      <p className='kick-t'>Control your turf hassle-free, all in one place</p>
                    </div>
                    <div className='start-btn'>
                      <button className='btn-str'>Start</button>
                    </div>
                  </div>

                </div>
              </>
            )}
          </div>
        </section>
        <div className='sports-cont'>
          {sport && sport.map((game) => {
            return (
              <div
                key={game._id}
                className='sport-wrapper'
              >
                <img src={game.image} alt="game" />
                <span className='game-name'>{game.name}</span>
              </div>
            )
          })}
        </div>
<Footer/>
      </main>
    </>
  )
}

export default Home