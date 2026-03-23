import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const WithoutMemo = () => {
  const n=1000000000
  const[input,setInput]=useState(0)
const expensivesum=(n)=>{
  console.log('inside');
  
  let sum =0
  for(let i =0;i<n;i++){
    sum=sum+i
  }
  return sum
}
const memoiseSum=useMemo(()=>{
   return expensivesum(n)
},[n])

  return (
   <>
 <div
 
 style={{
  display:'flex',
  gap:'10px'
 }}>
    <button 
   onClick={()=>setInput(prev=>prev+1)}
   >Add</button>

<span>{input}</span>

 </div>
   </>
  )
}

export default WithoutMemo