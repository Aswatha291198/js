import { Card,Button } from 'antd';
import React from 'react'
import { MdOutlineSportsCricket } from "react-icons/md";
import { BiFootball } from "react-icons/bi";
import { GiTennisBall } from "react-icons/gi";
import { IoBasketballOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Venue = ({venues}) => {
    console.log(venues,'from jshdjshdbj');
     const sportIconMap = {
  Cricket: <MdOutlineSportsCricket />,
  Football: <BiFootball />,
  Tennis: <GiTennisBall />,
  Basketball: <IoBasketballOutline />,
};   
   
const navigate=useNavigate()

  return (
    <>
    <main className=''>
        <div className='d-grid  m-20'>
        {venues.length===0 ? <div className='d-flex red w-1'>
          <span className='font-p f-6 f-size ls'> No Turfs Found</span>
        </div>
        :
        venues.map((turf)=>{
            return(
                <Card 
                className='flex-c gap bor m-20 c-p'
                style={{
                    height:350,
                    boxShadow:"0px 2px 12px rgba(0, 0, 0, 0.2)"
                }}
                onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    onClick={()=>{
            navigate(`/turf/${turf._id}`)
                    }
        }
        
                >
          <div className='d-flex'>
          <img src={turf?.poster} alt="t"
          className='w-100 bor'
          style={{
            objectFit:'cover',
            height:200
          }}
          />
          
          </div>

          <div className='flex-c gp-10 py-3 mt '>
            <span className='font-p f-6 b-color'>{turf.name}</span>
            <span className='font-p  b-color'>{turf.address}</span>
            
          </div>
          <div>
           <div className='d-flex gp-10 mt'>
             {
                turf.AddSport.map((game)=>{
                    return (
                        <div key={game._id}
                        className='flex-c  py-3 '>
                        <span className='f-size'
                        style={{
                            
                        }}>{sportIconMap[game.name]}</span>  
                        
                        </div>
                 )}
                )
             }
           </div>
          </div>

        </Card>
            )
        })}
    </div>
    </main>
    
    </>
  )
}

export default Venue