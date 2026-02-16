const mongoose=require('mongoose')
const Booking=require('../model/BookModel')
const stripe=require('stripe')(process.env.STRIPE_KEY)
const User=require('../model/userModel')

const makePayment=async(req,res)=>{
  try {
      const{amount,userId}=req.body
      if(!amount){
        return res.status(400).send({
          success:false,
          message:'Amount is required'
        })
      }
      const user=await User.findById(userId)
      if(!user){
        return res.status(404).send({
          success:false,
          message:'User not Found'
        })
      }
      let stripeCustomer=null
      const existing  =await stripe.customers.list({
        email:user.email,
        limit:1
      })
      if(existing.data && existing.dat.length > 0){
            const needUpdate=!stripeCustomer.name||!stripeCustomer.email
            if(needUpdate){
              stripeCustomer =await stripe.customers.update(stripeCustomer.id,{
                name:user.name,
                email:user.email
              })
            }
      }else{
        stripeCustomer=await stripe.customers.create({
          name:user.name,
          email:user.email
        })
      }
      const paymentIntent=await stripe.paymentIntent.create({
        amount,
        customer:stripeCustomer.id,
        currency:'inr',
        automatic_payment_method:{enabled:true},
        receipt_email:user.email,
      })
      return res.send({
        success:true,
        message:'Payment',
        data:{
          clientSecret:paymentIntent.client_Secret,
          paymentIntentId:paymentIntent.id
        }
      })
  } catch (error) {
    console.log(error.message);
    
  }
}

const getBookingTurfByDate=async(req,res)=>{
try {
  const{turfId,date}=req.query

const bookings=await Booking.find({turfId,date})
return res.send({
  success:true,
  data:bookings
})
} catch (error) {
  console.log(error.message);
  
}
}


module.exports={getBookingTurfByDate,makePayment}