import React, { useEffect, useState } from 'react'
import { hideLoading, showLoading } from '../../../redux/slice/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getTurfbyId } from '../../api/turf'
import { message } from 'antd'
import './single.css'
import bat from "../../assets/cricket-bat.png";
import football from "../../assets/football.png";
import tennis from "../../assets/tennis.png";
import pickle from "../../assets/pickle.png";
import shuttle from "../../assets/shuttle-cock.png";
import moment from 'moment'

const SingleTurf = () => {
  console.log('singleturf');

  const [turf, setTurf] = useState(null)
  const [data, setDate] = useState(moment().format('YYYY-MM-DD'))
  const dispatch = useDispatch()
  const params = useParams()
  const sportIcons = {
          Cricket: bat,
          Football: football,
          Tennis: tennis,
          "Pickle Ball": pickle,
          Shuttle: shuttle,
      }
  const getData = async () => {
    console.log('coming to the singleturf page');

    
    try {
      dispatch(showLoading())
      const response = await getTurfbyId(params.id)
      console.log(response);

      if(response.success){
        setTurf(response.data)
      }
      else {
        message.error(response.message)
      }
      dispatch(hideLoading())
    } catch (error) {
      console.log(error.message);
      dispatch(hideLoading())
    }
  }
  useEffect(() => {
   console.log('useeeffecr triggered');
   
    getData()
  }, [])
  

  return (
    <>
    <main className='single-cont'>
      <div className='single-wrapper'>
        <section className='single-disp'>
          {turf && (
            <>
            <div className='single-disp-name'> 
              <h1 className='turf-name-single'>{turf.name}</h1>
              <span>RATING</span>
              </div>
              <div className='single-turf-img'>
                <img src={turf.poster} alt="poster" className='single-poster' />
              </div>
              <div className='poster-div'>
                <div className='sports-wrap'>
                  <h1 className='sports'>Sports Available</h1>
                  <span></span>
                  </div>
                  <div className='sports-name-cont'>
                    <div className='sport-cont'>
                    {turf?.AddSport?.map((sport)=>{
                      return (
                          <div className='sports-div'>
                          
                        </div>
                      )
                    })}
                    </div>
                  </div>
                <div>

                </div>
              </div>
              <div classNames='facilities-cont'>
                <h1>Facilities</h1>
              </div>
              <div>

              </div>
              </>
          )}
        </section>
        <section className='single-disp-right'>
          <div className='book-now-div'>
            <button className='book-now-btn'
            
            >Book Now</button>
          </div>
          {turf && (
           <>
            <div className='turf-time-cont'>
              <span className='timing'>Timing</span>
            <div className='timing-wrap'>
              <span>{turf.open} - {turf.close} </span>
            </div>
          </div>
          <div className='address-div'>
            <span className='address'>{turf.address}</span>
          </div>
           </>
          )}
          <div>
            <div>
            </div>
            </div>
        </section>
      </div>
    </main>
    </>
  )
}

export default SingleTurf