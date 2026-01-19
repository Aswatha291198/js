import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTurfbyId } from '../../api/turf';
import { message } from 'antd';
import { hideLoading, showLoading } from '../../../redux/slice/userSlice';

import { TbCricket } from "react-icons/tb";
import { PiSoccerBallBold } from "react-icons/pi";
import { GiShuttlecock } from "react-icons/gi";
import { LiaTableTennisSolid } from "react-icons/lia";

import Footer from '../footer/Footer';
import BookModel from './BookModel';

const SingleTurf = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [turf, setTurf] = useState({});
  const [isBookModel, setIsBookModel] = useState(false);

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getTurfbyId(params.id);
      if (response.success) {
        setTurf(response.data);
        message.success(response.message);
      }
      dispatch(hideLoading());
    } catch (error) {
      console.log(error.message);
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main className='single-cont'>
        <div className='single-div'>
          <div className="single-left">
            <div className="name-cont">
              <div className="name-div">
                <span className='font-poppins'>{turf.name}</span>
              </div>
            </div>

            <div className="turf-img">
              <img src={turf.poster} alt={turf.name} />
            </div>

            <div className='sport-available'>
              <div className="sport-list">
                <h2 className='font-poppins'>Sports Available</h2>
                <div className="sport-cont">
                  {turf.AddSport?.map((sport) => (
                    <div className="turf-game" key={sport._id}>
                      {sport.name === 'Cricket' && <TbCricket className='sport-icon' />}
                      {sport.name === 'Football' && <PiSoccerBallBold className='sport-icon' />}
                      {sport.name === 'Shuttle' && <GiShuttlecock className='sport-icon' />}
                      {sport.name === 'Pickle Ball' && <LiaTableTennisSolid className='sport-icon' />}
                      <span>{sport.name}</span>
                    </div>
                  ))}
                </div>
                
              </div>
             
            </div>
             <div className="rules-cont">
                <span>Instructions</span>
                <p>{turf.rules} </p>
              </div>
          </div>

          <div className="single-right">
            <div
              className="book-now-cont font-poppins cursor-pointer"
              onClick={() => setIsBookModel(prev => !prev)}
            >
              Book Now
            </div>

            <div className="timing-cont">
              <span className='font-poppins'>Timing</span>
              <span className='font-poppins'>{turf.open} - {turf.close}</span>
            </div>

            <div className="location-div">
              <span className='font-poppins'>Location</span>
              <span className='font-poppins'>{turf.address}</span>
            </div>
          </div>
        </div>
      </main>

      {isBookModel && (
        <BookModel
          isBookModel={isBookModel}
          setIsBookModel={setIsBookModel}
          turf={turf}
        />
      )}

      <Footer />
    </>
  );
};

export default SingleTurf;
