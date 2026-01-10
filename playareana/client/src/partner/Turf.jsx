import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../../redux/slice/userSlice'
import { getAllturfOwner } from '../api/turf'
import { useParams } from 'react-router-dom'
import './owner.css'
import { Button } from 'antd'
import TurfForm from './TurfForm'

const Turf = () => {
  console.log("TURF COMPONENT RENDERED")
  const[addModel,setAddModel]=useState(false)
  const [turfs, setTurfs] = useState([])
  const[form,setForm]=useState('add')
  const dispatch = useDispatch()
  const { id } = useParams()

  console.log(id)

  const getTurfs = async () => {
    try {
      dispatch(showLoading())
      const response = await getAllturfOwner(id)
      if (response.success) {
        message.success(response.message)
        setTurfs(response.data)
      }
      dispatch(hideLoading())
    } catch (error) {
      console.log(error.message)
      dispatch(hideLoading())
    }
  }

  useEffect(() => {
    getTurfs()
  }, [])

  return (
    <>
      <main className="owner-turf-cont">
        <div className="turf-head-cont">
          <h2 className='font-style'>Turfs</h2>
        </div>
        <Button 
          type='primary'
          className='add-turf-btn
          font-poppins
          '
          onClick={()=>{setAddModel(prev=>!prev)
          setForm('add')}}
          >
            Add Turf
          </Button>
      </main>
      {addModel && (
        <TurfForm addModel={addModel}
        setAddModel={setAddModel}

        />
      )}
    </>
  )
}

export default Turf
