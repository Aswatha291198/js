import { message, Modal } from 'antd'
import React from 'react'
import { hideLoading,showLoading } from '../../redux/slice/userSlice'
import { useDispatch } from 'react-redux'
import { deleteTurf } from '../api/turf'

const DeleteModal = ({
    getTurfs,
    selectedTurf,
    setSelectedTurf,
    isDeleteModal,
    setIsDeleteModal
}) => {
    const dispatch=useDispatch()
    const handleOk=async ()=>{
        try {
            dispatch(showLoading())
            
            const response=await deleteTurf(selectedTurf)
            if(response.success){
                message.success(response.message)
                getTurfs()
            }
            else{
                message.error(response.message)
            }
            setSelectedTurf(null)
            setIsDeleteModal(false)
            dispatch(hideLoading())
        } catch (error) {
            console.log(error.message);
            dispatch(hideLoading())
            setIsDeleteModal(false)
            
        }
    }
    const handleCancel=()=>{
        setIsDeleteModal(false)
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