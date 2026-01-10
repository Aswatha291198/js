import { Col, Form, Input, Modal, Row, Select } from 'antd'
import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { hideLoading,showLoading } from '../../redux/slice/userSlice'
import { getAllGame } from '../api/game'
const TurfForm = ({ formType, addModel, setAddModel }) => {
    const dispatch=useDispatch()
    const{user}=useSelector(store=>store.users)
    const [games, setGames] = useState([])  
  const handleCancel = () => {
    setAddModel(false)
  }

  const getData=async()=>{
    try {
        dispatch(showLoading())
        const response=await getAllGame()
        if(response.success){
            setGames(response.data)
            dispatch(hideLoading())
        }

        
    } catch (error) {
        console.log(error.message);
        dispatch(hideLoading())
    }
  }
  useEffect(()=>{
getData()
  },[])
  return (
    <Modal
      open={addModel}
      onCancel={handleCancel}
      width={800}
      destroyOnClose
      footer={null}
    >
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Turf Name"
              name="name"
              rules={[{ required: true, message: 'Enter turf name' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Enter email' }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: 'Enter phone number' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify='space-between'>
            <Col span={10}>
            <Form.Item 
            label='Address'>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={10}>
            <Form.Item 
            label='City'>
                <Input/>
            </Form.Item>
            </Col>
        </Row>
        <Row justify='space-between'>
            <Col span={8}>
            <Form.Item 
            label='Location'>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={10}>
            <Form.Item 
            label='Rules'>
                <Input/>
            </Form.Item>
            </Col>
        </Row>
        <Row justify='space-between'>
            <Col span={8}>
            <Form.Item 
            label='Add Sport'>
                <Select 
                mode='multiple'
                allowClear
                >
           {games.map(game => (
      <Select.Option key={game._id} value={game._id}>
        {game.name}
      </Select.Option>
    ))}

                </Select>
            </Form.Item>
            </Col>
            <Col span={10}>
            <Form.Item 
            label='Rules'>
                <Input/>
            </Form.Item>
            </Col>
        </Row>
        
      </Form>
    </Modal>
  )
}

export default TurfForm
