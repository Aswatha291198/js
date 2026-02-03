  import { Button, Col, Form, Input, message, Modal, Row, Select } from 'antd'
import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { hideLoading,showLoading } from '../../../redux/slice/userSlice'
import { getAllGame } from '../../api/game'
import { getAllCity } from '../../api/city'
import TextArea from 'antd/es/input/TextArea'
import { addTurf, updateTurf } from '../../api/turf'
const TurfForm = ({ formType,
   addModel,
   setAddModel,
   getTurfs,
   form,
   selectedTurf,
   setSelectedTurf  
  }) => {

    const dispatch=useDispatch()
    const{user}=useSelector(store=>store.users)
    const [games, setGames] = useState([])  
    const [city,setCity]=useState([])
    const onFinish=async(values)=>{
      try {
        let response=null
        if(form==='add'){
          response=await addTurf({...values,owner:user?._id})
        }
        else{
          response=await updateTurf({
            ...values,
            turfId:selectedTurf._id
          })
        }
        if(response.success){
          message.success(response.message)
          setAddModel(false)
          getTurfs()
          setSelectedTurf(null)

        }
      } catch (error) {
        console.log(error.message);
        
      }
    }
  const handleCancel = () => {
    setAddModel(false)
  }

  const getData=async()=>{
    try {
        dispatch(showLoading())
        const gameResponse=await getAllGame()
        if(gameResponse.success){
            setGames(gameResponse.data)
            dispatch(hideLoading())
        }
        const cityRes=await getAllCity()
        if(cityRes.success){
          setCity(cityRes.data)
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
      title={form==='add'?'Add Turf':"Edit Turf"}
      onCancel={handleCancel}
      width={800}
      destroyOnHidden
      footer={null}
    >
      <Form layout="vertical"
      initialValues={form==='edit'? selectedTurf:""}
      onFinish={onFinish}>
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
        <Row>
          <Col span={24}>
          
            <Form.Item 
            label='Address'
            name='address'
              rules={[{ required: true, message: 'Please enter address' }]}>
                <TextArea/>
            </Form.Item>
            
          </Col>
        </Row>
        <Row gutter={16}>
            
            <Col span={8}>
            <Form.Item 
            label='City'
            name='city'>
                <Select 
                
                allowClear
                style={{
                  textTransform:'capitalize'
                }}
                >
           {city.map(city => (
      <Select.Option key={city._id} value={city._id}>
        {city.name}
      </Select.Option>
    ))}

                </Select>
            </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item 
            label='Open-time'
            name='open'>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item 
            label='Closing'
            name='close'>
                <Input/>
            </Form.Item>
            </Col>
        </Row>
        <Row gutter={16}>
            
            <Col span={16}>
            <Form.Item 
            label='Rules'
            name='rules'>
                <Input/>
            </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item 
            label='Add Sport'
            name='AddSport'>
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
        </Row>
        <Row justify='space-between'>
            
            <Col span={12}>
            
            <Form.Item 
            label='Poster'
            name='poster'>
                <Input/>
            </Form.Item>
            </Col>
             <Col span={10}>
            <Form.Item 
            label='Price'
            name='price'>
               <Input/>
              
              </Form.Item></Col>
           
        </Row>
        <Row gutter={16}>
           
             <Col span={8}>
            <Form.Item
            >
              <Button
              type='primary'
              htmlType='submit'
              className='form-btn'
              >Save</Button>
            </Form.Item>
            </Col>
           </Row>
        
      </Form>
    </Modal>
  )
}

export default TurfForm
