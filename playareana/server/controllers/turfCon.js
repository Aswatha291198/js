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
    try {
        const allturf=await turf.find()
        res.status(201).send({success:true,data:allturf})
    } catch (error) {
        return res.status(500).send("Something Went Wrong")
    }
}
const deleteTurf = async (req, res) => {
    try {
        const deleteTurf = await turf.findByIdAndDelete(req.body.id)
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
            data: allTurf
        })
    }
}
const getTurfByIdowner=async(req,res)=>{
    console.log('turf');
    
    try {
        const find=await turf.find({ owner: req.params.id })
        res.send({
            message:'turf',
            success:true,
            data:find
        })
    } catch (error) {
        res.send({
            message:"something went wrong",
            success:false
        })
        console.log(error.message);
        
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
module.exports={addTurf,updateTurf,deleteTurf,getTurfByIdowner,getAllTurf,getTurfBySearch}