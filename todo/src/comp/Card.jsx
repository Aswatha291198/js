import React, { useState } from 'react'

const Card = () => {
  const [hover, setHover] = useState(false)
console.log(hover);
const handelHover=()=>{
    console.log(hover);
    setHover(true)
}
const handleHoverCancel=()=>{
    console.log(hover);
    setHover(false)
}
  return (
    <>
      <div className="card">
        <div 
          className="cont"
          onMouseEnter={handelHover}
          onMouseLeave={handleHoverCancel}
        >
            {hover ?  <div>hover</div>:<h2>no</h2>}
        </div>

        <div className="cont"></div>
        <div className="cont"></div>
        <div className="cont"></div>
        <div className="cont"></div>
        <div className="cont"></div>
      </div>
    </>
  )
}

export default Card