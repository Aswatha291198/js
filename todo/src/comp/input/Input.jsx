import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addValue,addTask } from '../../redux/slices/TodoSlice'

const Input = () => {
  const{value,todoList}=useSelector(store=>store.todo)
  const dispatch=useDispatch()
 
    
  return (
    <>
    <div className='flex items-center justify-center flex-col'>
      <h2 className='font-extrabold text-center p-4 hover:text-amber-700'>Todo App</h2>
      <div className='p-6'>
        <input type="text" placeholder='Enter Your Task' className='w-[500px] border-2 h-[40px] rounded-l-2xl text-center border-blue-500'  value={value} onChange={(e)=>dispatch(addValue(e.target.value))}/>
        <button className='bg-blue-700 h-[41px] w-20 rounded-r-2xl text-white hover:text-black 'onClick={()=>dispatch(addTask(value))}>Add Task</button>
      </div>
    </div>
    </>
  )
}

export default Input