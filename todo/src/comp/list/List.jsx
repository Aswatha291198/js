import React from 'react'
import {useSelector} from 'react-redux'

const List = () => {
  const{todosList}=useSelector(store=>store.todo)
  console.log(todosList);
  console.log(Array.isArray(todosList));
  
  
  return (
    <>
    
    </>
  )
}

export default List