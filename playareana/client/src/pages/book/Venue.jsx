import { Card } from 'antd';
import React from 'react'

const Venue = ({venues}) => {
    console.log(venues,'from jshdjshdbj');
    
  return (
    <>
    <div className='d-flex gap'>
        {venues &&venues.map((turf)=>{
            return(
                <Card 
                className='d-flex gap' >
           {turf.name}
           {turf.city.name}

        </Card>
            )
        })}
    </div>
    
    </>
  )
}

export default Venue