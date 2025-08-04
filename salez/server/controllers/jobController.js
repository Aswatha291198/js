const job=require('../Model/jobModel')
const User=require("../Model/userModel")

const addJob=async(req,res)=>{
   try {
    console.log('creating a new job');
     const newJob=await job.create(req.body)
     return res.status(201).send({message:'Jobs created succesfully',data:newJob,success:true})
   } catch (error) {
    return res.status(500).send("Internal server wrong")
   }
}

const updateJob=async(req,res)=>{
    try {
        const updatejob=await job.findByIdandUpdate(req.body,req.body.id)
        if(!updateJob){
            return res.status(404).send("Job Not Found")
        }
         return res.status(201).send({message:'Jobs created succesfully',data:newJob,success:true})
        
    } catch (error) {
       return res.status(500).send("Internal server wrong") 
    }
}
const getRecommendedJobs=async (req,res)=>{
    console.log('jobbbbbsssss');
    try {
        const user= await User.findById(req.body.id)
        const skillExp=user.experience.flatMap(exp=>exp.skills)
        const recommend=[...user.preferences,...skillExp]
        const jobs=await job.find({keywords:{$in:recommend}})
        return res.status(304).send({success:true,data:jobs})
    } catch (error) {
        return res.status(500).send("Internal server wrong") 
    }
}

const deleteJob=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
module.exports={addJob,updateJob,getRecommendedJobs}