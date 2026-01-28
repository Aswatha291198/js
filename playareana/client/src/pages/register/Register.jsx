import React from 'react'
import { Input,Form,Button } from 'antd'
import { Link } from 'react-router-dom'
const Register = () => {
  
const onFinish=()=>{}

  return (
    <main className='d-f'>
    <section>
      <h2 className='color-g f-p'>Welcome To Turfo</h2>
    </section>
    <section className="py-3">
        
        <div style={{ width: 320, margin: '0 auto' }}>
          <Form
            layout="vertical"
            size="large"
            onFinish={onFinish}
          >
            
             <Form.Item
              label="Username"
              name="name"
              rules={[{
                required:true,
                message:'Username is required'
              }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
               rules={[{
                required:true,
                message:'email is required'
              }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
               rules={[{
                required:true,
                message:'password is required'
              }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
              <Button
                type="primary"
                size="large"
                shape="round"
                htmlType="submit" 
                className='f-p ls '
                style={{ width: 120,
                  fontSize:'large',
                  fontWeight:600
                 }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
      <section 
      >
        <span className='f-p f-6 ls'>Already User</span>
        <Link  className='py-3'to='/login'> Click Here</Link>
      </section>
    </main>
  )
}

export default Register