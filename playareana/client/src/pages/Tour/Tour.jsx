import React, { useState } from 'react'
import tournament from '../../assets/tournament.png'
import football from '../../assets/football.png'
import trophy from '../../assets/trophy.png'
import './tour.css'
import {useNavigate} from 'react-router-dom'
import TourForm from './TourForm'

const Tour = () => {
    const[tourModel,setTourModel]=useState(false)
    const[tournaments,setTournaments]=useState(null)
    const navigate=useNavigate()

    return (
        <>
            <main className='tour-main'>
                <div className='tour-div'>
                    <section className='tour-image'>
                        <div className='tour-img-div'>
                            <div className='tour-img-wrap'>
                                <img src={tournament} alt="tu" />
                                <h2>Gear up, game on, glory awaits</h2>
                                <button className='start-tour'
                                onClick={()=>{
                                    setTourModel(true)
                                }}><span>Start Tournament<img src={trophy} alt="tour" /></span></button>
                            </div>
                        </div>
                        <div className='line'>

                        </div>
                        <div className='right-side-tour'>
                            <div className='tour-title-div'>
                                <h2 className="tour-title">Join Exciting Tournaments</h2>
                            </div>
                            <div className='tour-cont'>
                                <p className="tour-desc">
                                    Compete with the best players, showcase your skills, and
                                    take home the glory. Whether it’s football, cricket, or badminton –
                                    the turf is waiting for you!
                                </p>
                            </div>
                            <div className='tour-btn-div'>
                                <button className="tour-btn">
                                    <span>Explore Tournaments<img src={football} alt="tour" /></span>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className='tour-cont-sect'>
                        <div className='tour-cont-div'>

                            <div className='tour-cont-div'>
                            <h3 >Because legends are made on the turf, not in the stands</h3>
                        </div>
                        <div>
                            <span className='span-tour  '>Write Your Story of Greatness</span>
                            <h3 className='tour-h'>Greatness isn’t earned by watching from the sidelines. Step onto the field, chase your dream, and write your story where legends are born.</h3>
                        </div>
                        <div>
                            <span className='span-tour  ' >More Than Winning It’s About Belonging</span>
                            <h3 className='tour-h'>Tournaments aren’t just about winning — they’re about passion, teamwork, and unforgettable moments. Join the turf, because every legend starts with a single game</h3>
                        </div>
                        <div>
                            <span className='span-tour  '>Legends Play, Crowds Cheer </span>
                            
                            <h3 className='tour-h'>The crowd may cheer, but legends play. Gear up, gather your team, and show the world what you’re made of</h3>                            
                                </div>
                        </div>
                    </section>
                    {tourModel && (
                        <TourForm setTourModel={setTourModel}
                        tourModel={tourModel}/>
                    )}

                </div>
            </main>

        </>
    )
}

export default Tour