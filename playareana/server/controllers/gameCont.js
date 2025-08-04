const { message } = require('antd')
const game=require('../model/gameModel')
const addGame =async(req,res)=>{
    try {
        const newGame=await game.create(req.body)
        res.status(200).send({message:"New game added",data:newGame})
    } catch (error) {
        res.status(500).send("something went wrong")
    }
}
const UpdateGame =async(req,res)=>{
    try {
        const Game=await game.findByAndUpdate(req.body.id,req.body)
        if(!Game){
            return res.status(404).send("game not found")
        }
        res.status(200).send({message:"game upated",data:newGame,success:true})
    } catch (error) {
        res.status(500).send("something went wrong")
    }
}
const deleteGame =async(req,res)=>{
    try {
        const Game=await game.findByAndDelete(req.params.id)
        if(!Game){
            return res.status(404).send({message:"game not found",success:false})
        }
       
    } catch (error) {
        res.status(500).send("something went wrong")
    }
}
const getAllGame=async(req,res)=>{
    try {
        const allgame=await game.find()
        res.send({
            success:true,
            data:allgame
        })
    } catch (error) {
         res.status(500).send("something went wrong")
        
    }
}
