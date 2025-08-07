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
        
    },
    timing: {
        type: String,
        required: true
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
    }

})
const turfModel = mongoose.model('Turf', turfSchema);
module.exports = turfModel