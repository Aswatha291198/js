const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    turf: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'turf'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    startTime: {
        type: Number,
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
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },


}, { timestamp: true })
const bookingModal = mongoose.model('bookings', BookSchema)