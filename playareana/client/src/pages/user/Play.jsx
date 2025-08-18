import React, { useEffect, useState } from 'react'
import { showLoading, hideLoading } from '../../../redux/slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllTurf } from '../../api/turf'
import { message } from 'antd'



const Play = () => {
  const [allTurf, setAllTurf] = useState(null)
  const dispatch = useDispatch()
  const getData = async () => {
    try {
      dispatch(showLoading())
      const response = await getAllTurf()
      if (response.success) {
        setAllTurf(response.data)
        message.success(response.message)
      }
      dispatch(hideLoading())
    } catch (error) {
      message.error(response.message)
      error.message()
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>

      {allTurf && allTurf.map((turf) => {
        <div>{turf.name}hi </div>
      })}

    </>
  )
}

export default Play