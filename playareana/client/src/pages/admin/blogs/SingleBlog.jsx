import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import{useParams} from 'react-router-dom'
import { hideLoading, showLoading } from '../../../../redux/slice/userSlice'
import { GetBlogById } from '../../../api/blog'
import { message } from 'antd'
import './blog.css'

const SingleBlog = () => {
  console.log('coming to the single blog page');
  
    const[blog,setBlog]=useState(null)
    const dispatch=useDispatch()
    const params=useParams()
    const getData= async()=>{
        try {
            dispatch(showLoading())
            const response =await GetBlogById(params.id)
            if(response.success){
              message.success(response.message)
              setBlog(response.data)
              dispatch(hideLoading())
            }
            else{
              message.error(response.message)
              
            }
            dispatch(hideLoading())
            console.log(response.data);
            
            
        }
         catch (error) {
            dispatch(hideLoading)
            console.log(error.message);
            
        }
    }
    useEffect(()=>{
      getData()
    },[])
  return (
    <>
    {blog && (
      <>
     <main className='single-blog'>
      <div className='single-blog-div'>
        <section className='image-section'>
        <div className='blog-title-div'>
          <h2 className='blog-title'>
            {blog.title}
          </h2>
          </div>
          <div className='blog-img'>
           <img src={blog.image} alt="blog" className='blog-img-div' />
          </div>
          </section>
          <div className='created-by'>
            <h1>Created By : <span>{blog.author.name}</span></h1>
           </div>
          <section className='blog-content'>
            <div>
           {blog.content.split('\n').map((line, index) => (
  <p key={index} style={{padding: "5px",
                         borderRadius: "5px",
                         margin:'20px' }}
                         className='blog-p'>
    {line}
  </p>
))}


            </div>
          </section>
          </div>
     </main>
      
      
      </>
    )}
    </>
  )
}

export default SingleBlog