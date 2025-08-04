import React from 'react'
import { Form, Button, Input, message } from 'antd'
import { Link, useMatch, useNavigate } from "react-router-dom"
import './register.css'
import { registerUser } from '../../api/user';

const Register = () => {
  const navigate=useNavigate()
  const onFinish=async(values)=>{
    console.log('register');
    
    try {
      const response=await registerUser(values)
      console.log(response.data);
      
    if(response.success){
      navigate('/login')
      message.success(response.message)
    }
    else{
      message.error(response.message)
    }
    } catch (error) {
      
      console.log('error');
    }
  }

  return (
    <>
      <div className='container'>
        <div className='login-wrap'>
          <div className='login-box'>
            <h2>Turfo</h2>
            <Form onFinish={onFinish}>
                <Form.Item
                
                name="name"
                
                className="form"
                rules={[{ required: true, message: "name is required" }]}>

                <Input  type="text" placeholder="Enter your Name" className='custom-input'/></Form.Item>
           
              <Form.Item
                
                name="email"
                
                className="form"
                rules={[{ required: true, message: "Email is required" }]}>

                <Input   type="text" placeholder="Enter your Email" className='custom-input'/></Form.Item>
              <Form.Item
                name="password"
                className="form"
                rules={[{ required: true, message: "Password is required" }]}>

                <Input  type="password"laceholder="Enter your password" className='custom-input' />
              </Form.Item>

              <Form.Item>
                <Button type="primary" className="button" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            <h2 className='text'>
              Already a user ?<Link to='/login' className='li'>
              Click here
              </Link>
            </h2>

            </Form>

          </div>
        </div>
      </div>
      l
    </>

  )
};

export default Register;