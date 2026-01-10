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
            type: mongoose.Schema.Types.ObjectId,
            ref:'city',  
            required: true
        },
        open: {
            type: String,
            required:true
            
        },
        poster:{
            type:String,
        },
        SlotTiming: {
            type: String,
        
        },
        facility:{
            type:[String]
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
        },
        AddSport:{
            type:[String],
        },
        price:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true 
        }

    },{timestamps:true})
    const turfModel = mongoose.model('Turf', turfSchema);
    module.exports = turfModel