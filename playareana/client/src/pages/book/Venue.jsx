import { Card } from 'antd';
import React from 'react'

const Venue = ({venue}) => {
    console.log((venue,'from'));
    
  return (
    <>
    <div>
        {venue &&venue.map((turf)=>{
            return(
                <Card >
           {turf.name}
        </Card>
            )
        })}
    </div>
    
    </>
  )
}

export default Venue