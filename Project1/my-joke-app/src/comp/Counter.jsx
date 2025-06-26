import React from 'react'
import { CounterAction } from '../../redux/slices/CounterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count= useSelector(state=>state.counter.value )
    
    const dispatch=useDispatch()
  return (
    <>
    <button onClick={()=>dispatch(CounterAction.increment())}>+</button>
    <h2>count:{count}</h2>
    <button onClick={()=>dispatch(CounterAction.decrement())}>-</button>
    <button onClick={()=>dispatch(CounterAction.reset())}>reset</button>
    
    </>
  )
}

export default Counter