import React, { useState } from 'react'
import { Form, Modal, Select, message } from 'antd'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../../../redux/slice/userSlice'
import { MakePayment } from '../../api/book'
import moment from 'moment'

const BookModel = ({ isBookModel, setIsBookModel, turf }) => {
  const dispatch = useDispatch()
  const [time,setTime]=useState(moment().format('hh:mm'))
  const[timeModal,setTimeModal]=useState(false)
  const[timings,setTimings]=useState([])

  const handleCancel = () => {
    setIsBookModel(false)
  }

  const onToken = async (token) => {
    try {
      console.log(token,'token details');
      
      dispatch(showLoading())

      const response = await MakePayment({
        token,
        amount: turf.price, // send rupees to backend
      })

      dispatch(hideLoading())

      if (response?.success) {
        message.success('Payment Successful 🎉')
        setIsBookModel(false)
      } else {
        message.error(response?.message || 'Payment failed')
      }
    } catch (error) {
      dispatch(hideLoading())
      message.error(error.message || 'Something went wrong')
    }
  }

  const getTime=async()=>{
    try {
      const now=moment()
      
    } catch (error) {
      
    }
  }

  return (
    <Modal
      centered
      open={isBookModel}
      onCancel={handleCancel}
      destroyOnClose
      footer={null}
      width={400}
      
    >
      <div className="model-cont">
      <div className="model-title d-flex">
         <h2>{turf.name}</h2>
       <span className='font-poppins'>{turf.city.name}</span>
      </div>
      <div className="model-details">
       <Select></Select>
      </div>
       
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <StripeCheckout
          token={onToken}
          amount={turf.price * 100} // Stripe expects paise
          name={turf.name}
          description="Turf Booking Payment"
          billingAddress
          stripeKey="pk_test_51SomJmFzrRZ5SvS3NgFnOvGkmUBwNFEi02pzV0c86b2e77dDtvAW89DrGJwd4lcAqyIbl7avXACSHh3d4knxzd3Y00q13EP157"
        >
          <button className="book-now">
            Pay ₹{turf.price}
          </button>
        </StripeCheckout>
      </div>
    </Modal>
  )
}

export default BookModel
