import React, { useEffect, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import whistle from '../../assets/whistle.png'
import down from '../../assets/down.png'
import bat from "../../assets/cricket-bat.png";
import football from "../../assets/football.png";
import tennis from "../../assets/tennis.png";
import pickle from "../../assets/pickle.png";
import shuttle from "../../assets/shuttle-cock.png";
import { useDispatch } from 'react-redux'
import{useNavigate}from 'react-router-dom'
import { hideLoading, showLoading } from '../../../redux/slice/userSlice'
import { getAllGame } from '../../api/game'
import { getAllTurf } from '../../api/turf';

const Book = () => {
    const [sportsModel, setSportsModel] = useState(false)
    const dispatch = useDispatch()
    const [games, setGames] = useState(null)
    const navigate=useNavigate()
    const [venueSearch, setVenueSearch] = useState('')
    const [turfList, setTurfList] = useState(null)

       
    const sportIcons = {
        Cricket: bat,
        Football: football,
        Tennis: tennis,
        "Pickle Ball": pickle,
        Shuttle: shuttle,
    };

    const getData = async () => {
        try {
            dispatch(showLoading())
            const gameResponse = await getAllGame()
            if (gameResponse.success) {
                setGames(gameResponse.data)
                dispatch(hideLoading())
            }
            const turfResponse = await getAllTurf()
            if (turfResponse.success) {
                setTurfList(turfResponse.data)
                dispatch(hideLoading())
            }
            dispatch(hideLoading())
            console.log(gameResponse);

        } catch (error) {
            console.log(error.message);
            dispatch(hideLoading())

        }
    }
    const handleChange = (e) => {
        setVenueSearch(e.target.value)
        console.log(e.target.value);

    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <main className='book-main'
            >
                <div className='book-div-cont'
                >
                <section className='book-name-sect'>
                <div className='book-name-wrap'>
                <div className='book-name-cont'>
                <h1 className='book-name-h1'>Sports Venue Discover and Book Nearby Venue</h1>
                <div className='book-search-cont'>
                <div className='book-search-input'>
                <i className="fa-solid fa-magnifying-glass seach-input"></i>
                <input type="text" placeholder='Search by venue name' onChange={handleChange} />
                </div>
                <div className='book-select' >
                <div className='book-select-cont'
                onClick={() => {setSportsModel(!sportsModel) }}>
                <span className='whistle'><img src={whistle} alt="whistle" /></span>
                <span className='all-sport'>All Sports</span>
                <span className='down'><img src={down} alt="" />
                </span>
                </div>
                {sportsModel && (
                <div className="sports-dropdown">
                <div className='sport-drop'>
                {games && games.map((game) => {
                return (
                <div className='sports-cont'>
                <input type="checkbox" className='check-box' />
                <div className='sport-name-wrap'>
                <span>{game.name}</span>
                </div>
                <div className='sport-img-wrap'>
                <span><img src={sportIcons[game.name]} alt="" /></span>
                </div>
                </div>
                )})}
                </div>                                  
                </div>)}
                </div>
                </div>
                </div>
                </div>
                </section>
                <section className='venue-nav-bar'>
                <div className='venue-nav-wrap'>
                  <div className='venue-disp'>
                <div className='venue-wrap'> 
               {turfList &&( <span className='venue-text'>Venue ({turfList.length})</span>)}
                </div>
                  
                  <div>
                    <div> <span></span></div>
                  </div>
                   </div>  
                 
                </div>
                </section>
              <section className='turflist-card-sect'>
              <div className='turflist-card-cont'>
            
                    {turfList &&
            turfList
                .filter((turf) =>
                turf.name.toLowerCase().includes(venueSearch.toLowerCase())
                )
                .map((turf) => {
                    return(
                        <div
                        className='turflist-cards'
                        key={turf._id}
                        ><img src={turf.poster} alt="turf" className="turf-img"/>
                        <div><span>{turf.name}</span></div>
                        </div>
                    )
                })
                }
             
              </div>                
              </section>
              </div>
              </main>
        </>
    )
}

export default Book