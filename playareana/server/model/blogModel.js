const mongoose=require('mongoose')

const BlogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    image:{
        type:String
    },
},{timestamps:true})

const blogModel=mongoose.model('Blog',BlogSchema)

module.exports=blogModel