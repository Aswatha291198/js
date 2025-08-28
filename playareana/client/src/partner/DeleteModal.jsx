import { message, Modal } from 'antd'
import React from 'react'
import { hideLoading,showLoading } from '../../redux/slice/userSlice'
import { useDispatch } from 'react-redux'
import { deleteTurf } from '../api/turf'

const DeleteModal = ({
    getData,
    selectedTurf,
    setSelectedTurf,
    isDeleteModal,
    setDeleteModal
}) => {
    const dispatch=useDispatch()
    const handleOk=async ()=>{
        try {
            dispatch(showLoading())
            const turfId=selectedTurf._id
            const response=await deleteTurf(turfId)
            if(response.success){
                message.success(response.message)
                getData()
            }
            else{
                message.error(response.message)
            }
            setSelectedTurf(null)
            setDeleteModal(false)
            dispatch(hideLoading)
        } catch (error) {
            console.log(error.message);
            dispatch(hideLoading())
            setDeleteModal(false)
            
        }
    }
    const handleCancel=()=>{
        setDeleteModal(false)
        setSelectedTurf(null)
    }
  return (
    <>
    <Modal
    centered
    title="Delete Turf"
    open={isDeleteModal}
    onOk={handleOk}
    onCancel={handleCancel}
    >
        <p>Are you sure you want to delete this Turf?</p>
    </Modal>
    
    </>
  )
}

export default DeleteModal