import React, { useEffect, useState } from 'react'
import { DatePicker, Form, Modal, Row, Col, Input, message, Select } from 'antd'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../../../redux/slice/userSlice'
import { getAllTurf } from '../../api/turf'
import { newTournament } from '../../api/tournament'

const { Option } = Select

const TourForm = ({ tourModel, setTourModel }) => {
  const [turfs, setTurfs] = useState([])
  const dispatch = useDispatch()

  const getData = async () => {
    try {
      dispatch(showLoading())
      const turfResponse = await getAllTurf()
      if (turfResponse.success) {
        setTurfs(turfResponse.data)
        message.success(turfResponse.message)
      } else {
        message.error(turfResponse.message)
      }
      dispatch(hideLoading())
    } catch (error) {
      console.log(error.message)
      dispatch(hideLoading())
    }
  }

  const handleOk = async (values) => {
    try {
      dispatch(showLoading())
      const response = await newTournament(values)
      if (response.success) {
        message.success(response.message)
        setTourModel(false)
      }
      dispatch(hideLoading())
    } catch (error) {
      console.log(error.message)
      dispatch(hideLoading())
    }
  }

  const handleCancel = () => {
    setTourModel(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Modal
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        open={tourModel}
        width={700}
        footer={null} // we'll handle form submit manually
      >
        <Form layout="vertical" onFinish={handleOk}>
         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40}}>
            <Col span={8}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter tournament name' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Venue"
                name="venue"
                rules={[{ required: true, message: 'Please select a venue!' }]}
              >
                <Select placeholder="Select a Turf" showSearch optionFilterProp="children">
                  {turfs.map((turf) => (
                    <Option key={turf._id} value={turf._id}>
                      {turf.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Game" name="sportType">
                <Input />
              </Form.Item>
            </Col>
          </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40}}>
            <Col span={8}>
              <Form.Item label="Start-date" name="startDate">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="End-date" name="endDate">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Poster" name="poster">
                <Input />
              </Form.Item>
            </Col>
          </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40}}>
            <Col span={8}>
              <Form.Item label="Entry Fee" name="entryFees">
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Total Teams" name="totalTeams">
                <Input type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Type" name="gameType">
                <Select>
                  <Option value="league">League</Option>
                  <Option value="knockout">Knockout</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          {/* ✅ Dynamic Prize Section */}
          <Form.List name="prize">
            {(fields, { add, remove }) => (
              <>
                <label><b>Prizes</b></label>
                {fields.map(({ key, name, ...restField }, index) => (
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40}} key={key} align="middle">
                    <Col span={10}>
                      <Form.Item
                        {...restField}
                        label="Position"
                        name={[name, 'position']}
                        rules={[{ required: true, message: 'Enter prize position' }]}
                      >
                        <Input placeholder={index === 0 ? 'Winner' : 'Runner-up'} />
                      </Form.Item>
                    </Col>
                    <Col span={10}>
                      <Form.Item
                        {...restField}
                        label="Amount"
                        name={[name, 'amount']}
                        rules={[{ required: true, message: 'Enter prize amount' }]}
                      >
                        <Input type="text" placeholder="Amount" />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <a onClick={() => remove(name)}>Remove</a>
                    </Col>
                  </Row>
                ))}
                <Form.Item>
                  <a onClick={() => add()}>+ Add Prize</a>
                </Form.Item>
              </>
            )}
          </Form.List>

          {/* ✅ Dynamic Rules Section */}
          <Form.List name="rules">
            {(fields, { add, remove }) => (
              <>
                <label><b>Rules</b></label>
                {fields.map(({ key, name, ...restField }) => (
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 40}} key={key} align="middle">
                    <Col span={16}>
                      <Form.Item
                        {...restField}
                        name={name}
                        rules={[{ required: true, message: 'Please enter a rule' }]}
                      >
                        <Input placeholder="Enter a rule" />
                      </Form.Item>
                    </Col>
                    <Col span={4}>
                      <a onClick={() => remove(name)}>Remove</a>
                    </Col>
                  </Row>
                ))}
                <Form.Item>
                  <a onClick={() => add()}>+ Add Rule</a>
                </Form.Item>
              </>
            )}
          </Form.List>
           <Row
           gutter={{xs: 8, sm: 16, md: 24, lg: 32, xl: 40}}>
            <Col span={8}>
           <Form.Item
           label='Format'
           name='teamFormat'
           rules={[{ required: true, message: 'Please enter a Format' }]}
           >
            <Input/>
           </Form.Item>
            </Col>
            <Col span={8}>
            <Form.Item
            label='Time'
            name='time'>
<Input/>
            </Form.Item>
            </Col>
           </Row>

          <Form.Item>
            <button type="submit" className="tour-new-btn">
              Create Tournament
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default TourForm
