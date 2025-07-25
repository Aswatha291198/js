const mongoose=require('mongoose')

const userschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["recruiter","candidate"],
        default:"candidate"
    }
},{timestamp:true})

const userModel=mongoose.model("users",userschema)
module.exports=userModel
