const mongoose=require('mongoose')

const gameSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    timing:{
        type:String,
        required:true
    },
    host:{
        type: mongoose.Schema.Types.ObjectId,
              ref: "users",
    },
    Instructions:{
        type:String,     
    },
    level:{
type:String
    }
})
const gameModel=mongoose.model(gameSchema,'games')
module.export=gameModel