import React from 'react'
import { Form, Button, Input, message ,Radio } from 'antd'
import { Link, useNavigate } from "react-router-dom"
import './login.css'
import { loginUser } from '../../api/user';

const Login = () => {
  const navigate=useNavigate()
  const onFinish=async(values)=>{
    console.log('login fronten');
    
    try {
      const response=await loginUser(values)
    if(response.success){
      localStorage.setItem("token",response.data)
      message.success(response.message)
      navigate('/')
    }
    else{
      message.error(response.message)
    }
    } catch (error) {
      message.error(response.message)
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
                
                name="email"
                htmlFor='email'
                className="form"
                rules={[{ required: true, message: "Email is required" }]}>

                <Input id="email" type="text" placeholder="Enter your Email" className='custom-input'/></Form.Item>
              <Form.Item
               
                name="password"
                htmlFor='password'
                className="form"
                rules={[{ required: true, message: "Password is required" }]}>

                <Input id="email" type="password" placeholder="Enter your password" className='custom-input' />
              </Form.Item>

              <Form.Item>
                <Button type="primary" className="button" htmlType='submit'>
                  Login
                </Button>
              </Form.Item>
            <h2 className='text'>
              New to Turfo ?<Link to='/register' className='li'>
              Register Here
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

export default Login;