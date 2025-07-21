import React from 'react';
import { Form, Button, Input, message,Radio } from 'antd';
import './register.css';
import { Link, useNavigate } from 'react-router-dom'
import { RegisterUser } from '../api/user';

const Register = () => {
  const navigate=useNavigate()
  const onFinish = async (values) => {
    try {
      const response = await RegisterUser(values)
      if (response.success) {
        message.success(response.message)
        navigate('/login')

      }
      else {
        message.error(response.message)
      }
    } catch (error) {
      message.error(error.message)

    }


  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='register-layout '>
      <div className='register-box'>
        <h2 className='salez-text'>Welcome TO Salez By HireForSkillz</h2>
        <Form
          name="registerform"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="register-form"
        >
          <Form.Item
            label="name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input className="custom-input" />
          </Form.Item>

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
              Register
            </Button>
          </Form.Item>
          <div className='radio'>
            <Form.Item
          label="Register As A Recruiter"
          htmlFor='role'
          name="role">
            <Radio.Group name='Radiogroup' >
              <Radio value='recruiter'>Yes</Radio>
              <Radio value='candidate'>No</Radio>
            </Radio.Group>

          </Form.Item>
          </div>
          <p>Already a User <Link to='/login'>login</Link></p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
