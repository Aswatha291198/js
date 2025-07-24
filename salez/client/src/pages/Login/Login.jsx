import React from 'react'
import { Form, Button, Input, message } from 'antd'
import { Link, useNavigate } from "react-router-dom"
import login from './login.png'
import './login.css'
import { LoginUser } from '../../api/user'
const Login = () => {
  const navigate = useNavigate()
  
    const onFinish = async (values) => {
  try {
    const response = await LoginUser(values)
    if (response.success) {
      localStorage.setItem("token", response.data)
      message.success(response.message)
      navigate('/')
    } else {
      message.error(response.message)
    }
  } catch (error) {
    console.log(error)
    message.error("Something went wrong")
  }
}


return (
  <div className='login-layout' style={{ backgroundImage: `url(${login})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className='login-box'>
      <h2 className='salez-text'>Welcome TO Salez By HireForSkillz</h2>
      <Form
        name="loginForm"
        onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
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
)
};

export default Login;