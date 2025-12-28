const mongoose=require('mongoose')

const citySchema=new mongoose.Schema({
    name:{
        type:{
            type:String,
            required:true,
            active:true
        }
    }
},{timestamp:true})

const cityModal=mongoose.model('City',citySchema)
module.exports=cityModal