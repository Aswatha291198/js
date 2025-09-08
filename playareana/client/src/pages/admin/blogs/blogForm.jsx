import React from 'react'
import{Form,Modal,Row,Col,Input, message} from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { hideLoading,showLoading } from '../../../../redux/slice/userSlice'
import { useDispatch,useSelector } from 'react-redux'
import { addBlog, Updateblog } from '../../../api/blog'

const BlogForm = ({
    blogModal,
    getData,
    setBlogModal
}) => {
    const {user}=useSelector(store=>store.users)
    const [form] = Form.useForm();  
    const dispatch=useDispatch()
    const handleOk=async(values)=>{
        console.log('coming to the addblog');
        
        try {
            dispatch(showLoading())
            const response =await addBlog({
                ...values,
                id:user._id
            })
            if(response.success){
                message.success(response.message)
                getData()
                dispatch(hideLoading())
                setBlogModal(false)
            }
            else{
                message.error(response.message)
            }
            dispatch(hideLoading())
        } catch (error) {
            console.log(error.message);
            dispatch(hideLoading())
        }
    }
    const handleCancel=()=>{
        setBlogModal(false)
    }
  return (
    <Modal
    centered
     onOk={() => form.submit()} 
    onCancel={handleCancel}
    open={blogModal}>
        <Form
        form={form}
        onFinish={handleOk}>
        <Row gutter={{ xs: 6, sm: 10, md: 12, lg: 16 }}>
            <Col span={24}>
            
                <Form.Item
                label='Title'
                name='title'
                >
                    <Input placeholder='Enter the Title'/>
                </Form.Item>
           
            </Col>
        </Row>
        <Row gutter={{xs: 6, sm: 10, md: 12, lg: 16}}>
           <Col span={24}>
           
            <Form.Item
            label='Content'
            name='content'>
                <TextArea/>
            </Form.Item></Col>
        </Row>
        <Row gutter={{xs: 6, sm: 10, md: 12, lg: 16}}>
        <Col span={24}>
        <Form.Item
        label='Poster'
        name='image'>
            <Input/>
            </Form.Item></Col>
        </Row>
         </Form>
    </Modal>
  )
}

export default BlogForm