import React, { useEffect } from 'react'
import {fetchMiddleware} from '../../redux/middleware/userMiddleware'
import { useDispatch, useSelector } from 'react-redux'

const User = () => {
    const {user,error,loading,params}=useSelector(store=>store.users)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchMiddleware(params))
    },[params])
    if(loading ){
        return <h2>...Loading</h2>
    }
    if(error){
        return <h2>Something Went Wrong</h2>
    }
    if(!user){
        return <h2>User Not Found</h2>
    }
  return (
    <div>
    <h2>User Details</h2>
   <h2>name:{user.name}</h2>    
    </div>
  )
}

export default User