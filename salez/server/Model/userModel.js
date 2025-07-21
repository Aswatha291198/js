const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","recruiter","candidate"],
        required:true,
        default:"candidate"
    }
})
const userModel  = mongoose.model("users",userSchema)
module.exports=userModel