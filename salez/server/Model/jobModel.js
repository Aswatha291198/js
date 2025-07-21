const mongoose = require("mongoose")

const jobSchema = mongoose.Schema({
    JobName: {
        type: String,
        required: true
    },
    JobRole: {
        type: String,
        required: true
    },
    JobType: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    CompanyName: {
        type: String,
        required: true
    },
    Skills: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    Salary: { 
        type: Number,
        required: true 
    },
    appliedJobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job"
    }]
})
const jobModel=mongoose.model("jobs",jobSchema)
module.exports=jobModel