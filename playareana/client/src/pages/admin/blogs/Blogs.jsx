import React, { useEffect, useState } from 'react'
import { Table, Button, message } from 'antd'
import './blog.css'
import BlogForm from './blogForm'
import {hideLoading,showLoading} from '../../../../redux/slice/userSlice'
import {useDispatch,useSelector} from 'react-redux'
import {GetAllBlogs} from '../../../api/blog'
import {EditOutlined,DeleteOutlined} from '@ant-design/icons'
import DeleteBlog from './DeleteBlog'
import { data, useNavigate } from 'react-router-dom'
const Blogs = () => {
  const [blogs, setBlogs] = useState(null)
  const [blogModal, setBlogModal] = useState(false)
  const dispatch=useDispatch()
  const[deleteBlog,setDeleteBlog]=useState(false)
  const[selectBlog,setSelectBlog]=useState(null)
  const{user}=useSelector(state=>state.users)
  const navigate=useNavigate()
  const getData=async()=>{
    try {
      console.log('coming to the getdata');
      
      dispatch(showLoading())
      console.log('before the api');
      
      const response=await GetAllBlogs()
      if(response.success){
        const allBlogs=response.data
        message.success(response.message)
        setBlogs(allBlogs.map((blog)=>{
          return {
            ...blog,
            key:`blog${blog._id}`
          }
        }))
      }
      else{
        console.log('api failed');
        
        message.error(response.message)
      }
      dispatch(hideLoading())
      console.log(response);
      
    }
     catch (error) {
      dispatch(hideLoading())
      console.log(error.message)
    }
  }

  useEffect(()=>{
getData()
  },[])

  const tableHeadings=[
    {
      title:'Title',
      dataIndex:'title',
      key:'title'
    },
    {
      title:'Author',
      dataIndex:'Author',
      render:(text,data)=>{
        return data?.author?.name || "Unknown"
      }
    },
    {
      title:'Created',
      dataIndex:'createdAt',
      key:'create'
    },
     {
      title: "Action",
      render: (text, data) => {
        return (
          <div>
            {user?.name === data?.author?.name && (
              <Button
              onClick={() => {
                setBlogModal(true);
                setSelectBlog(data);
              }}
            >
              <EditOutlined />
            </Button>
            )}
            <Button
              onClick={() => {
                setDeleteBlog(true);
                setSelectBlog(data);
              }}
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
    {
      title:'View',
      render:(data,text)=>{
        return(
          <Button
          onClick={()=>{
            navigate(`/blog/${data._id}`)
          }}>
            View
          </Button>
        )
      }
    }
  ]

  return (
    <>
    <h1>Blogs</h1>
      <div className='blog-btn'>
        <Button
          type='primary'
          className='add-blog'
          onClick={()=>{
            setBlogModal(true)
          }}
        >+ Add Blog</Button>

      </div>
      <Table dataSource={blogs} columns={tableHeadings}/>
      {
        blogModal && (
          <BlogForm setBlogModal={setBlogModal}
          blogModal={blogModal}
          getData={getData}
          />
        )
      }
      {
        deleteBlog && (
          <DeleteBlog getData={getData}
          selectBlog={selectBlog}
          setSelectBlog={setSelectBlog}
          deleteBlog={deleteBlog}
          setDeleteBlog={setDeleteBlog}
          />
        )
      }

    </>
  )
}

export default Blogs