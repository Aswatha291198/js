import { message, Modal } from 'antd'
import React from 'react'
import { hideLoading, showLoading } from '../../redux/slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addTurf, updateTurf } from '../api/turf'
import{Form,Row,Col,Input,Button}from 'antd'
const TurfForm = ({
  isModalOpen,
  setIsModalOpen,
  selectedTurf,
  setSelectedTurf,
  getData,
  formType

}) => {
  const { user } = useSelector(state => state.users)
  const { TextArea } = Input;
  const dispatch = useDispatch()
  const onFinish = async (values) => {
    try {
      dispatch(showLoading())
      let response=null
      if(formType==='add'){
        response=await addTurf({...values,owner:user._id})
      }
      else{
        console.log(values);
        values.turfId=selectedTurf._id
        response=await updateTurf(values)       
      }
      dispatch(hideLoading())
    } catch (error) {
      console.log(error.message);
      dispatch(hideLoading())
      
    }
  }
  const handleCancel=()=>{
setIsModalOpen(false)
setSelectedTurf(null)
}
  return (
    <>
      <Modal
        centered
        title={formType === "add" ? "Add Turf" : "Edit Turf"}
        open={isModalOpen}
        onCancel={handleCancel}
        width={800}
        footer={null}>
        <Form
          layout="vertical"
          initialValues={selectedTurf}
          onFinish={onFinish}
        >
          <Row gutter={{ xs: 6, sm: 10, md: 12, lg: 16 }}>
            <Col span={24}>
              <Form.Item
                label="Turf Name"
                name="name"
                rules={[{ required: true, message: "Turf name is required!" }]}
              >
                <Input placeholder="Enter the Turf name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Turf Address"
                name="address"
                rules={[{ required: true, message: "Turf address is required!" }]}
              >
                <TextArea
                  id="address"
                  rows="3"
                  placeholder="Enter the description"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Row gutter={{ xs: 6, sm: 10, md: 12, lg: 16 }}>
                <Col span={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Email is required!" }]}
                  >
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter the email"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Phone number"
                    name="phone"
                    rules={[
                      { required: true, message: "Phone number is required!" },
                    ]}
                  >
                    <Input
                      type="number"
                      id="number"
                      placeholder="Enter the contact number"
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row  gutter={{ xs: 6, sm: 10, md: 12, lg: 16 }}>
            <Col span={8}>
            <Form.Item
            label='location'
            name='location'
            >
              <Input type='text' placeholder='Enter Turf Location'/>
            </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item
            label='opening time'
            name='open'
            >
              <Input type='text' placeholder='Enter Opening time'/>
            </Form.Item>
            </Col>
    
            <Col span={8}>
            <Form.Item
            label='closing time'
            name='close'
            >
              <Input type='text' placeholder='Enter Closing time'/>
            </Form.Item>
            </Col>
          </Row>
          
          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              style={{ fontSize: "1rem", fontWeight: "600" }}
            >
              Submit the Data
            </Button>
            <Button className="mt-3" block onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Form>


      </Modal>
    </>
  )
}

export default TurfForm