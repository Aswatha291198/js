const mongoose=require("mongoose")

const companySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
const companyModel=mongoose.model('companies',companySchema)

module.exports=companyModel