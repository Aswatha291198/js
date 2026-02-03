import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../redux/slice/userSlice'
import { getAllturfOwner } from '../api/turf'
import { useParams } from 'react-router-dom'
import './owner.css'
import { Button,message } from 'antd'
import TurfForm from './TurfForm'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DeleteModal from './DeleteModal'
const Turf = () => {
  console.log("TURF COMPONENT RENDERED")
  const[addModel,setAddModel]=useState(false)
  const [turfs, setTurfs] = useState([])
  const[selectedTurf,setSelectedTurf]=useState(null)
  const[isDeleteModal,setIsDeleteModal]=useState(false)
  const[form,setForm]=useState('add')
  const{user}=useSelector(store=>store.users)
  const dispatch = useDispatch()
  const { id } = useParams()

 console.log(id,'form the turf');
 

  const getTurfs = async () => {
    try {
      if(id){
        dispatch(showLoading())
      const response = await getAllturfOwner(id)
      if (response.success) {
        message.success(response.message)
        setTurfs(response.data)
       dispatch(hideLoading())
      }
      }
      
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
          <div className="turf-card-own">
            {turfs &&turfs.map((turf)=>{
            console.log(turf.city?.name,'city');
            
           return ( <div
           className='turf-card'
           key={turf._id}>
            <div className="turf-name-div">
              <span>{turf.name}</span>
              
            </div>
            
           <div className="div-loc-cont">
          <p>{turf.address}</p>
          <span>{turf.city.name}</span>
           </div>
            <div className="icon-cont">
              <MdDeleteForever
                 className='own-icon'
                 onClick={()=>{setIsDeleteModal(prev=>!prev)
                setSelectedTurf(turf._id) 
                }
                 }
                 />
            <FaEdit
            className='own-icon'
            onClick={()=>{
              console.log('dndjqsbdhb');
              
              setForm('edit')
              setAddModel(prev=>!prev)
              setSelectedTurf(turf)
              console.log(selectedTurf,'null formnsjfnfj');
              
            }}
            />
            </div>
           </div>
         ) })}
          </div>
      </main>
      {addModel && (
        <TurfForm addModel={addModel}
        setAddModel={setAddModel}
        getTurfs={getTurfs}
        form={form}
        selectedTurf={selectedTurf}
        setSelectedTurf={setSelectedTurf}
        />
      )}
      {isDeleteModal && (
        <DeleteModal
        setIsDeleteModal={setIsDeleteModal}
        isDeleteModal={isDeleteModal}
        selectedTurf={selectedTurf}
        setSelectedTurf={setSelectedTurf}
        getTurfs={getTurfs}/>
      )}
    </>
  )
}

export default Turf
