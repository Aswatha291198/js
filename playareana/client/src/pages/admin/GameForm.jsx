import React from 'react'
import{Form, Input, message, Modal,Button} from 'antd'
import { hideLoading,showLoading } from '../../../redux/slice/userSlice'
import { useDispatch } from 'react-redux'
import { addGame } from '../../api/game'
const GameForm = ({
  isModalopen,
  setIsModalOpen,
  getData
}) => {
  const dispatch=useDispatch()
  const onFinish=async(values)=>{
    try {
      dispatch(showLoading())
      const res=await addGame(values)
      if(res.success){
        message.success(res.message) 
        getData()
        setIsModalOpen(false) 
        dispatch(hideLoading())
      }
    } catch (error) {
      console.log(error.message);
      dispatch(hideLoading())
    }
  }
  const handleCancel=()=>{
    setIsModalOpen(false)
  }

  return (
    <>
    <Modal
    centered
    open={isModalopen}
    onCancel={handleCancel}
    width={500}
    >
      
      <Form onFinish={onFinish}>
      <Form.Item
      label='name'
      name='name'

      >
        <Input placeholder='add a game'/>
      </Form.Item>
      <Form.Item><Button
      htmlType='submit'>Save</Button></Form.Item>
      </Form>
    </Modal>
    </>
  )
}

export default GameForm