import React from 'react';
import { Form, Button, Input, message} from 'antd';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../api/user';


const Login = () => {
  const navigate=useNavigate()
  const onFinish = async (values) => {
    console.log('login frontedn');
    
    try {
      const response=await LoginUser(values)
    if(response.success){
      message.success(response.message)
      localStorage.setItem("token",response.data)
      navigate('/')
    }
    else{
      message.error(response.message)
    }
    } catch (error) {
      console.log(error);
      
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login-layout'>
      <div className='login-box'>
        <h2 className='salez-text'>Welcome TO Salez By HireForSkillz</h2>
        <Form
          name="loginForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="login-form"
        >
          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input className="custom-input" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className="custom-input" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
            
          </Form.Item>
          <p>Create an Account <Link to='/register'>Register</Link></p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
