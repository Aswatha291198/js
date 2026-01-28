const Stripe = require('stripe')(process.env.STRIPE_Key)
const turf = require('../model/turfModel')
const book = require('../model/BookModel')

/**
 * MAKE PAYMENT
 */
const makePayment = async (req, res) => {
  try {
    
    const { amount, token } = req.body
    console.log(token.email,'email');
   
    
    
    // 1️⃣ Check if customer already exists
    const customers = await Stripe.customers.list({
      email: token.email,
      limit: 1,
    })
 console.log(customers,'customers');

    let currCustomer

    if (customers.data.length > 0) {
      currCustomer = customers.data[0]
    } else {
      // 2️⃣ Create customer (NO token here)
      currCustomer = await Stripe.customers.create({
        email: token.email,
      })
    }

    // 3️⃣ Convert TOKEN → PAYMENT METHOD (VERY IMPORTANT)
    const paymentMethod = await Stripe.paymentMethods.create({
      type: 'card',
      card: {
        token: token.id, // token used ONLY ONCE here
      },
    })

    // 4️⃣ Attach payment method to customer
    await Stripe.paymentMethods.attach(paymentMethod.id, {
      customer: currCustomer.id,
    })

    // 5️⃣ Create & CONFIRM payment intent
    const paymentIntent = await Stripe.paymentIntents.create({
      amount: amount * 100, 
      currency: 'usd',
      customer: currCustomer.id,
      payment_method: paymentMethod.id,
      confirm: true,
      receipt_email: token.email,
      description: 'Turf booking payment',
    })

    res.status(200).json({
      success: true,
      message: 'Payment successful',
      transactionId: paymentIntent.id,
    })
  } catch (error) {
    console.log(req.body,'errororo');
    
    console.log(error.message,'error')

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

/**
 * BOOK TURF
 */
const bookTurf = async (req, res) => {
  try {
    const { turf, date, startTime, endTime, user, pricePerHour } = req.body

    const checkTime = await book.findOne({
      turf,
      date,
      startTime: { $lt: endTime },
      endTime: { $gt: startTime },
    })

    if (checkTime) {
      return res.status(400).json({
        success: false,
        message: 'This turf is already booked for the selected time',
      })
    }

    const duration = endTime - startTime
    const totalPrice = duration * pricePerHour

    const booking = await book.create({
      turf,
      user,
      date,
      startTime,
      endTime,
      duration,
      totalPrice,
    })

    res.status(201).json({
      success: true,
      message: 'Booking successful',
      booking,
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = { makePayment, bookTurf }

    