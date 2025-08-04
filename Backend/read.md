import React from 'react'
import { Form, Input, Button } from 'antd';
import {Link} from 'react-router-dom'
import "./register.css"
const Register = () => {
  return (
    <div className='container'>
      <h1 className='text'>Welcome to Salez by HireForSkillz</h1>
      <div className='login-box'>
        
         <Form layout="vertical">
            
          <Form.Item
            label="username"
            name="username"
            rules={[{ required: true, message: 'Please Enter Your Name' }]}
          >
            <Input placeholder="Enter your Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please Enter Your Email' }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please Enter Your Password' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
            Register
            </Button>
           
          </Form.Item>
           <Link to='/login'>Already a User</Link>
        </Form>
      </div>
    </div>
    
  )
}

export default Register




import React from 'react';
import { Form, Input, Button } from 'antd';
import Register from './Register';
import {Link} from 'react-router-dom'
import './login.css'
const Login = () => {
  return (
    <>
    <div className='container'>
      <h1 className='text'>Welcome to Salez by HireForSkillz</h1>
      <div className='login-box'>
        
         <Form layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please Enter Your Email' }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please Enter Your Password' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
           
          </Form.Item>
           <Link to='/register'>Forget Password</Link>
        </Form>
      </div>
    </div>
    
    
    </>
  );
};

export default Login;



