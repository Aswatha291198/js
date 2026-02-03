import React from 'react'
import { Layout } from 'antd'
import { useSelector } from 'react-redux'
import { FaRegUser } from "react-icons/fa"

const Owner = () => {
const{Sider}=Layout
const{user}=useSelector(store=>store.users)
  return (
    <>
    <main 
    style={{
      height:'100vh'
    }}>
      <Layout 
      className='flex-c h-100'>
        <Sider className='m-20 p-left  '>
          <section className='h-50  flex-c center w-100'>
            <div className=' m-20
            h-1 w-50 d-f-center'
            >
              <div className='h-1 red w-50 d-f-center'
              style={{
                borderRadius:"50%",
               
              }}>
                <FaRegUser
                className='f-size'
                /> </div>
            </div>
            <section className='flex-c gap  mt'>
              <span className='cap f-6'>{user?.name}</span>
              <span className='cap f-6'>{user?.email}</span>
            </section>
          </section>
        </Sider>
      </Layout>
    </main>
    
    
    
    </>
  )
}

export default Owner