import { message, Modal } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import{hideLoading,showLoading} from '../../../redux/slice/userSlice'
import { deleteGame } from '../../api/game'

const DeleteModal = ({
    deleteModal,
    setDeleteModal,
    selectedGame,
    setSelectedGame,
    getData
}) => {
  console.log('deleteModal com');
  
    const dispatch=useDispatch()

    const handleOk=async()=>{
        try {
            dispatch(showLoading())
            console.log('inside the function');
            
            const res=await deleteGame(selectedGame._id)
            console.log(res.data);
            
            if(res.success){
              message.success(res.message)
                getData()
            }
            else{
              message.error(res.message)
            }
            dispatch(hideLoading())
            setSelectedGame(null)
            setDeleteModal(false)

            
        } catch (error) {
            console.log(error.message);
            
          dispatch(hideLoading())
            message.error('cannat delete')
            setDeleteModal(false)
        }
    }
    const handleCancel=()=>{
      setDeleteModal(false)
      setSelectedGame(null)
    }
  return (
    <>
    <Modal
    centered
    title='Delete'
    open={deleteModal}
    onCancel={handleCancel}
    onOk={handleOk}
    />
    <p>delelte</p>
    </>
  )
}

export default DeleteModal