import React, { useEffect, useState } from 'react'
import './play.css'
import whistle from '../../assets/whistle.png'
import down from '../../assets/down.png'
import { getAllGame } from '../../api/game'
import {useDispatch} from 'react-redux'
import {hideLoading,showLoading} from '../../../redux/slice/userSlice'
import { getAllTurf } from '../../api/turf'
import {useNavigate} from 'react-router-dom'
import Footer from '../footer/Footer'
import { GetAllTournament } from '../../api/tournament'

const Book = () => {
  const[turfs,setTurfs]=useState(null)
  const[tournament,setTournament]=useState(null)
  const[dropDown,setDropDown]=useState(false)
  const [sports,setSports]=useState(null)
  const[venueSearch,setVenueSearch]=useState('')
  const navigate=useNavigate()
  
  const dispatch=useDispatch()

  const getData= async ()=>{
    try {
      dispatch(showLoading())
      const gameResponse=await getAllGame()
      const turfResponse=await getAllTurf()
      const tournamentResponse=await GetAllTournament() 
      if(turfResponse.success){
        setTurfs(turfResponse.data)
      }
      if(tournamentResponse.success){
        setTournament(tournamentResponse.data)
      }
      if(gameResponse.success){
        setSports(gameResponse.data)
      }
      console.log(turfResponse);

      dispatch(hideLoading())      
    } catch (error) {
      console.log(error.message);
      dispatch(hideLoading())
    }
   
    
  }
  useEffect(()=>{
    getData()
  },[])
  return (
   <>
  <main className='book-container'>
    <div className='book-wrapper'>
      <section className='discover-container'>
        <div className='discover-wrapper'>
          <div className='discover-text-cont'>
            <h2 className='discover-text'>Discover and Book Nearby Grounds Easily for Your Next Match
</h2>
          </div>
           <div className='search-container'>
           <div className='search-wrapper'>
             <i className="fa-solid fa-magnifying-glass search"></i>
            <input type="text" Placeholder='Search By Venue' className='venue-search'
            onChange={(e)=>setVenueSearch(e.target.value)}
            value={venueSearch}/>
           </div>
        
            </div> 
        </div>
       
      </section>
      <section className='venue-nav'>
        <div className='venue-div'>
         <div className='venue-cont'>
          <div className='venue-wrapper'
         ><span className='venue-name'>Venue</span></div>
          <div className='tour-wrapper'
           onClick={()=>navigate('/tournament')}><span className='tour-name'>Tournament</span></div>
         </div>
        </div>
      </section>
      <section className='venue-cards-cont'>
        <div className='venue-card'>
          {turfs && turfs.filter((turf)=>
          turf.name.toLowerCase().includes(venueSearch.toLowerCase())
          ).map((turf)=>{
            return (
              <div className='venue-cards'
              key={turf._id}
            
>
               <div className='venue-img-div'
                onClick={()=>navigate(`/turf/${turf._id}`)}>
                <img src={turf.poster} alt="turf"  className='venue-img'/>
                 <div className='bookable'><span className='bookable-text'>Bookable</span></div>
          </div>
          
                <div className='turf-info'>
                  <span className='turf-name'>{turf.name}</span>
                  <span className='turf-loco'>{turf.address}</span>
                </div>
                <div className='turf-sport'>
                  {turf.AddSport.map((sport)=>
                    <div>
                     {sport}
                    </div>
                  )}
                </div>
               
              </div>
            )
          })}
        </div>
      </section>
     
    </div>
     <Footer/>
  </main>
   </>
  )          
}

export default Book