import React from 'react'
import { Layout, Menu, Form, Input } from 'antd'
import { SearchOutlined,BellOutlined } from '@ant-design/icons'
import './ProtectedRoute.css'
import logo from '../logo/logo.png'


const ProtectedRoute = () => {
  const { Header } = Layout
  const navItems = [
    {
      key: "jobs",
      label: "Jobs",
    },
    {
      key: "companies",
      label: "Companies",
    },
    {
      key: "services",
      label: "Services"
    }
  ]
  return (
    <>
      <Layout>
        <Header className='navbar'>
          <div className='logo-container'>
            img
          </div>
          <Menu theme='light' mode='horizontal' items={navItems}style={{padding:0}}/>
          <Form className='custm-form'>
            <div className='form'> 
              <Form.Item
                name="Search"
                rules={[{ message: 'Search' }]}
              >
                <Input prefix={<SearchOutlined />} />
              </Form.Item>
            </div>
            
          </Form>
          <BellOutlined/>
          

        </Header>

      </Layout>




    </>
  )
}

export default ProtectedRoute