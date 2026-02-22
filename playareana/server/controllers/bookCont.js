const mongoose=require('mongoose')
const Booking=require('../model/BookModel')
const stripe=require('stripe')(process.env.STRIPE_KEY)
const User=require('../model/userModel')
const turf=require('../model/turfModel')
const Games=require('../model/gameModel')
const makePayment = async (req, res) => {
  try {
    const { amount, userId } = req.body;

    if (!amount || !userId) {
      return res.status(400).json({
        success: false,
        message: "amount and userId are required",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    let stripeCustomer;

    const existing = await stripe.customers.list({
      email: user.email,
      limit: 1,
    });

    if (Array.isArray(existing?.data) && existing.data.length > 0) {
      stripeCustomer = existing.data[0];
    } else {
      stripeCustomer = await stripe.customers.create({
        name: user.name || "Playarena User",
        email: user.email,
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
      customer: stripeCustomer.id,
      automatic_payment_methods: { enabled: true },
      receipt_email: user.email,
    });

    return res.status(200).json({
      success: true,
      data: {
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      },
    });

  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getBookingTurfByDate = async (req, res) => {
  try {
    const { turf, date } = req.body;
        console.log('insdie backend');
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    const bookings = await Booking.find({
      turf,                          
      date: {
        $gte: startOfDay,            
        $lte: endOfDay,            
      },
    });
    console.log(bookings,'bokkkoko')
    return res.status(200).json({
      success: true,
      data: bookings,
    });

  } catch (error) {
    console.error("getBookingTurfByDate error:", error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const bookTurf = async (req, res) => {
  try {
    console.log(req.body);
  
    
    const{bookType,transactionId, ...rest}=req.body  
    const newBooking=await Booking.create({
      ...rest,
      bookType,
      status:bookType==='book'?'confirmed':'open',
      players:[{
        user:req.userid,
        hasPaid:true,
        amountPaid:bookType==='book'?rest.totalPrice:rest.pricePerplayer
      }]
    })
    const populateBooking=await Booking.findById(newBooking._id).populate({
      path:'players',
      populate:[{
        path:'users'
      }]
    })
    .populate('game')
    res.status(200).json({
      success: true,
      message: 'Booking created successfully',
      data:populateBooking
    })

  } catch (error) {
    console.log(error.message,'line 131')

    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}
  const getBookingsTurfOwner=async(req,res)=>{
  try {
    const{ownerId,turf}=req.body
    const owner= await turf.find({owner:ownerId})
    .populate('owner')

    const allreq=await Booking.find({
      owner,
      turf
    })
    return res.send({
      success:true,
      data:allreq
    })
  } catch (error) {
    console.log(error.message);
    
  }
}
const getAllGroupGames=async(req,res)=>{
  try {
    const {city,game}=req.query
    const gameName=await Games.find({name:game})
    const booking=await Booking.find({status:'open'})
    .populate({
      path:'turf',
      populate:[
        {path:'city',select:'name'}
      ]
    })
    .populate('game')
    .populate('hostedBy')
    const filtered=booking.filter((b)=>{
      const cityMatch= b.turf.city.name.trim().toLowerCase()===city.trim().toLowerCase()
    const gameMatch=b?.game?.name===game
    
        if(!game){
          return cityMatch
        }
        else{
          console.log('cominmg in the ');
          
          return cityMatch && gameMatch
        }
    })
    
    res.send({
      data:filtered
    })
  } catch (error) {
    console.log(error.message);
    
  }
}

const getBookings=async(req,res)=>{
  try {
    const{id}=req.params
    const booking=await Booking.findById(id).populate({
      path:'turf',
      populate:[{
        path:'city'
      },
    ]
    })
    .populate('game')
    .populate('hostedBy')
    .populate('players')
    
    res.send({
      success:true,
      data:booking
    })
  } catch (error) {
    console.log(error.message);
    res.send({
      success:false,
      message:error.message
    })
  }
}
module.exports={
  getBookingTurfByDate,
  makePayment,
  bookTurf,
  getBookingsTurfOwner,
  getAllGroupGames,
  getBookings
}