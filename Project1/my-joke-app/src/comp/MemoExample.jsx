import React, { useState } from 'react'

const MemoExample = () => {
    const [number, setNumber] = useState(0)
    const handleChange = (e) => {
        const value = e.target.value;
        setNumber(value === '' ? '' : Number(value));
    };
    
    const oddEven = () => {
        const num = Number(number)
        return num % 2 === 0 ? "Even" : "Odd"
    }
    

    return (
        <>
            <input type="number" value={number} onChange={handleChange} />
            <h2>{number} is {oddEven()}</h2>



        </>
    )
}

export default MemoExample