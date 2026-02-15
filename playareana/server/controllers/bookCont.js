const mongoose=require('mongoose')
const Booking=require('../model/BookModel')

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


module.exports={getBookingTurfByDate}