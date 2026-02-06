const turf = require('../model/turfModel')

const addTurf = async (req, res) => {
    try {
        const newturf = await turf.create(req.body)
        return res.status(200).send({ message: 'Turf Created', success: true, data: newturf })
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Something Went Wrong")
        
        
    }
}
const updateTurf = async (req, res) => {
    console.log('backend turf update');
    
    try {
        const exixtingTurf = await turf.findByIdAndUpdate(req.body.turfId, req.body)
        console.log(exixtingTurf);
        
        if (!exixtingTurf) {
            return res.status(404).send({ message: 'Turf Not Found', success: false })
        }
        return res.status(200).send({ message: "Turf Updated", success: true, data: exixtingTurf })

    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Something Went Wrong")
        
        
    }
}
const getAllTurf =async(req,res)=>{
    console.log('getallturf');
    
    try {
        const allturf=await turf.find().populate('city')
        .populate('AddSport')
        .populate('owner')
        res.status(201).send({success:true,data:allturf})
    } catch (error) {
        console.log(error.message);
        
        return res.status(500).send("Something Went Wrong")
    }
}
const deleteTurf = async (req, res) => {
    try {
        const deleteTurf = await turf.findByIdAndDelete(req.params.id)
        if(!deleteTurf){
            return res.status(404).send({message:"Not able to delete",success:false})
        }
        res.send({
            message: 'deleted',
            success: true,
           
        })
    } catch (error) {
        res.send({
            message: 'error loading',
            success: false,
            data: deleteTurf
        })
        console.log(error.message);
        
    }
}
const getTurfByIdowner=async(req,res)=>{
    console.log(req.params.id,'from the city cont ownid');
    
    
    try {
        const find=await turf.find({ owner: req.params.id }).populate('city')
        res.send({
            message:'turf',
            success:true,
            data:find
        })
        console.log(find,'from the controller ownerturfid');
        
    } catch (error) {
        console.log(error.message);
        res.send({
            message:"something went wrong",
            success:false
        })
        
        
    }
}
const getTurfById=async(req,res)=>{
    console.log('coming to the id');
    try {
        const turfById=await turf.findById(req.params.id).populate('AddSport')
        .populate('city')
        console.log(turfById,'trufid');
        
        res.send({
            success:true,
            data:turfById
        })
        
        
    } catch (error) {
        console.log(error.message);
        
        res.send({
            success:false,
            message:error.message
        })
        
    }
}
const getTurfBySearch = async (req, res) => {
    try {
        const search = await turf.find(req.body)
        if (!search) {
            return res.status(404).send({ message: "No turf found", success: false })
        }
        res.send({
            success: true,
            data: search
        })
    } catch (error) {
        return res.status(500).send('Something went wrtong')
    }
}
module.exports={addTurf,updateTurf,deleteTurf,getTurfByIdowner,getAllTurf,getTurfBySearch,getTurfById}