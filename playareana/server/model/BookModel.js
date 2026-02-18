const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    turf: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'turf'
    },
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },

    

    bookingType:{
            type:String,
            required:true
    },
    
    startTime: {
        type: Number ,
        required: true
    },
    endTime: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    transactionId:{
        type:String,
        required:true
    },
    totalPrice: {
        type: Number,
        required: true
    },


}, { timestamps: true })
const bookingModal = mongoose.model('bookings', BookSchema)
module.exports=bookingModal