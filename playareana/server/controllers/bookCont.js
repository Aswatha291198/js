const Stripe=require('stripe')(process.env.STRIPE_Key)
const turf=require('../model/turfModel')
const book=require('../model/BookModel')


const makePayment=async(req,res)=>{
    try {
        const{amount,token}=req.body

        const customers=await Stripe.customers.list(
            {
                email:token.email,
                limit:1
            }
        )
        console.log(customers.data);

        let currCustomer=null
        if(customers.data.length>0){
                currCustomer=customers.data[0]
        }
        else{
            const createCustomer=async()=>{
                return await Stripe.create({
                    source:token.id,
                    email:token.email
                })
            }
            currCustomer=createCustomer()
        }
        const paymentIntent=await Stripe.paymentIntent.create({
            amount:amount,
            currency:"usd",
            customer:currCustomer.id,
            payment_method_types:['card'],
            receipt_email:token.email,
            descriptions:'Token has been assigned'
        })
        const transactionId=paymentIntent.id
          res.send({
      success: true,
      message: "Payment Successfull, !Tickets Booked",
      data: transactionId,
    });     
    } catch (error) {
        console.log(error.message);
        res.send({
      success: false,
      message: error.message,
    });    
    }}
    const bookTurf = async (req, res) => {
  try {
    const { turf, date, startTime, endTime, user } = req.body;
    const checkTime = await book.findOne({
      turf,
      date,
      startTime: { $lt: endTime },
      endTime: { $gt: startTime },
    });
if (checkTime) {
      return res.status(400).json({
        success: false,
        message: "This turf is already booked for the selected time",
      });
    } 
    const duration = endTime - startTime;
    const totalPrice = duration * req.body.pricePerHour;
    const booking = await book.create({
      turf,
      user,
      date,
      startTime,
      endTime,
      duration,
      totalPrice,
    });
    res.status(201).json({
      success: true,
      message: "Booking successful",
      booking,
    });
}
catch(err){
    console.log(err.message);  
}
    }
  

module.exports={bookTurf,makePayment}