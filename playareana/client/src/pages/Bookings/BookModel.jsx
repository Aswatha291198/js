import React from 'react'
import { Modal } from 'antd'
import StripeCheckout from 'react-stripe-checkout'
import { MakePayment } from '../../api/book';

const BookModel = ({ isBookModel, setIsBookModel, turf }) => {
console.log('hi fron thev');

  const handleCancel = () => {
    setIsBookModel(false)
  }

  const onToken =async (token) => {
    console.log('Stripe Token:', token)
    try {
      const amount=turf?.price
      const response=await MakePayment({
        token,
        amount
      })
    } catch (error) {
      
    }
  }

  return (
    <Modal
      centered
      open={isBookModel}
      onCancel={handleCancel}
      destroyOnHidden
      footer={null}
      width={800}
    >
      <h2>Pay Now</h2>

      <StripeCheckout
        token={onToken}
        amount={(turf?.price) * 100}
       
        name={turf?.name}
        description="Turf Booking Payment"
        billingAddress
        stripeKey="pk_test_51SomMhCGzp7Xs1hclLb14i1Hldk8JAbvaJyyr50sCT6myBVnW4QATRgPDr3gMeAXFB4ayuMjQXMxzM8mXXsTcst500FtNDY7je"
      >
        <button className="book-now" type='submit'
        
        >Pay Now</button>
      </StripeCheckout>
    </Modal>
  )
}

export default BookModel
