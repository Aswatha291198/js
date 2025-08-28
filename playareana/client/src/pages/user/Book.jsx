import React, { useEffect, useState } from 'react'
import { showLoading, hideLoading } from '../../../redux/slice/userSlice'
import { useDispatch } from 'react-redux'
import { getAllTurf } from '../../api/turf'
import { message, Input, Card } from 'antd'
import whistle from '../../assets/whistle.png'
import down from '../../assets/down.png'
import bat from '../../assets/cricket-bat.png'
import football from '../../assets/football.png'
import tennis from '../../assets/tennis.png'
import pickle from '../../assets/pickle.png'
import  shuttle from '../../assets/shuttle-cock.png'
import './book.css'
import{useNavigate} from 'react-router-dom'
import { getAllGame } from '../../api/game'
const Book = () => {
    const [allTurfs, setAllTurfs] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [games, setGames] = useState(null)
    const [activeTabs,setActiveTabs]=useState('venue')
    const[view,setView]=useState('venue')
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const getData = async () => {
        try {
            dispatch(showLoading())
            const allGamesresponse = await getAllGame()
            if (allGamesresponse.success) {
                setGames(allGamesresponse.data)
            }
            else {
                message.error(allGamesresponse.response)
            }
            const response = await getAllTurf()
            if (response.success) {
                const allturfList = response.data
                console.log(allTurfs);

                setAllTurfs(allturfList.map((turf) => {
                    return {
                        ...turf,
                        key: `turflist${turf._id}`
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
        getData()
    }, [])
    return (
        <>
            <main className='book-cont'>
                <div className='book-div-cont'>
                    <div className='book-txt-cont'>
                    <div className='book-txt-wrap'>
                    <div >
                    <h1 className='book-text'>Sports Venues in Bangalore: Discover and Book Nearby Venue</h1>
                    </div>
                    <div className='book-wrapper'>
                    <div className='input-wrap'>
                    <span>
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    </span>
                    <Input
                    placeholder='search by your venue name'
                    className='input-book' />
                    </div>
                    <div className='select-wrap' onClick={() => {
                    setOpenModal(!openModal)
                    }}>
                    <span className='whistle-wrap'>
                    <img src={whistle} alt="whistle" className='whistle-icon' />
                    </span>
                    <span className='all-sports'>All Sports</span>
                    <span className='down-wrapper'>
                    <img src={down} alt="down" className='down' />
                    </span>
                    </div>
                    </div>
                    </div>
                    </div>
                    {openModal && (
                        <>
                            <div className='modal-cont'>
                                <div className='modal-wrap'>
                                {
                                games && games.map((game) => {
                                return(
                                <div
                                key={game._id}
                                className='games-cont'>
                                <input type="checkbox"className='check-box' />
                                <div className='game-name'>
                                {game.name==='Cricket' && (
                                <div className='cricket-wrap'>
                                <img src={bat} alt="bat" className='bat' />
                                <span className='cricket'>{game.name}</span>
                                </div>
                               )}
                               {game.name==='Football' && (
                               <div className='cricket-wrap'>
                              <img src={football} alt="bat" className='bat' />
                             <span className='cricket'>{game.name}</span>
                             </div>
                             )}
                            {game.name==='Tennis' && (
                           <div className='cricket-wrap'>
                            <img src={tennis} alt="bat" className='bat' />
                            <span className='cricket'>{game.name}</span>
                            </div>
                             )}
                            {game.name==='Pickle Ball' && (
                             <div className='cricket-wrap'>
                             <img src={pickle} alt="bat" className='bat' />
                             <span className='cricket'>{game.name}</span>
                             </div>
                             )}
                             {game.name==='Shuttle' && (
                             <div className='cricket-wrap'>
                             <img src={shuttle} alt="bat" className='bat' />
                             <span className='cricket'>{game.name}</span>
                             </div>
                             )}

                            </div>
                             </div>    
                             )      
                             })
                              }
                            </div>
                            </div>

                        </>
                    )}
                    <div className='book-display'>
                        <div className='book-display-cont'>
                        <div className='book-display-wrap'>
                            <div className='venues' onClick={()=>{ 
                                setActiveTabs('venue')
                                 setView('venue') }} 
                                 style={{ color:activeTabs==='venue'? 'green':'black',
                                }}>
                                  <span className='venues-name'>Venues</span>
                                   <span>({allTurfs.length})</span>
                                    </div> <div className='tournaments'
                                     onClick={()=>{ setActiveTabs('tournaments') 
                                     setView('tournaments') }} style={{ color:activeTabs==='tournaments'? 'green':'black'
                                     }}>
                                         <span className='venues-name'>Tournaments</span>
                                          <span>({allTurfs.length})</span>
                             </div>
                        </div>
                        </div>
                    </div>
                    {view==='venue' &&(
                        <div className='venue-cont'>
                            <div className='venue-wrapper'>
                                {allTurfs && allTurfs.map((turf)=>{
                                    return (
                                        <div 
                                        className='book-div'
                                        onClick={()=>{
                                                   navigate(`/turf/${turf._id}`) 
                                        }}
                                        key={turf._id} >
                                           <div className='turf-img-div'>
                                            <img src={turf.poster} alt="poster"className='turf-poster' />
                                           </div>
                                           <div className='book-turf-wrap'>
                                            <span className='book-turf-name'>{turf.name}</span>
                                            <span>{turf.address}</span>

                                           </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                    
                </div>
            </main>
        </>

    )
}

export default Book