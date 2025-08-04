const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    jobName: {
        type: String,
    },
    role: {
        type: String,
        required: true
    },
    Experience: {
        type: String,
        required: true
    },
    Salary: {
        type: Number,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Skills: {
        type: String,
        required: true
    },
    Education: {
        type: String,
        required: true
    },
    Appliedby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    postedby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    keyword:{
        type:[String]
    }

})
const jobModel = mongoose.model("jobs", jobSchema)
module.exports = jobModel
