import { Card, message, Modal } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { hideLoading,showLoading } from '../../../../redux/slice/userSlice'
import { DeleteBlog } from '../../../api/blog'


const DeleteBlogModal = ({
    getData,
    deleteBlog,
    selectBlog,
    setSelectBlog,
    setDeleteBlog
}) => {
    const dispatch=useDispatch() 

    const handleOk= async()=>{
        try {
            dispatch(showLoading())
            const response= await DeleteBlog(selectBlog._id)
            if(response.success){
                message.success(response.message)
                getData()
                dispatch(hideLoading())
            }
            else{
                message.error(response.message)
            }
            dispatch(hideLoading())
            setDeleteBlog(false)
            setSelectBlog(null)
        } catch (error) {
            console.log(error.message);
            dispatch(hideLoading())
        }
    }
    const handleCancel=()=>{
        setDeleteBlog(false)
        setSelectBlog(null)
    }
  return (
    <>
    <Modal
    centered
    onOk={handleOk}
    onCancel={handleCancel}
    open={deleteBlog}
    >
        <Card><p>Are you sure you want to delete </p></Card>
    </Modal>
    
    
    </>
  )
}

export default DeleteBlogModal