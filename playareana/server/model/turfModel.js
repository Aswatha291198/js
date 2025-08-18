const mongoose = require('mongoose')


const turfSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    open: {
        type: String,
        required:true
        
    },
    SlotTiming: {
        type: String,
       
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    close: {
        type: String,
        required: true
    },
    isClosed: {
        type: Boolean,
        default: false
    },
    isActive:{
        type:Boolean,
        default:false
    }

},{timestamps:true})
const turfModel = mongoose.model('Turf', turfSchema);
module.exports = turfModel