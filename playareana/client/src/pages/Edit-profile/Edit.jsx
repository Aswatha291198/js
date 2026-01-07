import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './edit.css'
import { Button, Form,Input, message } from 'antd';
import { useDispatch } from 'react-redux';
import { hideLoading,showLoading,setUser } from '../../../redux/slice/userSlice';
import { updateuser } from '../../api/user';
import { GetCurrentUser } from '../../api/user'

const Edit = () => {
  console.log('coming to the eidtri');
  const{user}=useSelector(store=>store.users)
  const dispatch=useDispatch()

  const onFinish=async(values)=>{
    try {
      dispatch(showLoading())
      const edit=await updateuser({...values,id:user._id})

      if(edit.success){
        message.success(edit.message)
          await GetCurrentUser()
        dispatch(hideLoading())
        
      }
      await GetCurrentUser()
        } catch (error) {
      message.error(error.message)
      dispatch(hideLoading())
      console.log(error.message);
      
    }
  }
  
  return (
    <>
    <div className="edit-profile">
    <div className="edit-head">
        <span className='font-poppins'>Edit-Profile</span>
    </div>
      <div className="edit-form">
         <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ 
      name:user?.name,
      email:user?.email
     }}
     onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
    label='Username'
    name='name'
    rules={[{required:true}]}>
      <Input/>
    </Form.Item>
     <Form.Item
    label='Email'
    name='email'
    rules={[{required:true}]}>
      <Input/>
    </Form.Item>
    <Form.Item>
      <Button 
      type='primary'
      htmlType='submit'
      className='edit-btn font-poppins'>Save</Button>
    </Form.Item>
  </Form>
      </div>
    </div>
    
    </>
  )
}

export default Edit