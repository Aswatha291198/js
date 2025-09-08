const tournament=require('../model/tournamentModel')

const createTournament=async(req,res)=>{
    console.log('coming to the create');
    
    try {
        const newTournament=await tournament.create(req.body)
        return res.status(200).send({ message: 'Tournament created', success: true, data: newTournament })
    } catch (error) {
        console.log(error.message)
        return res.status(500).send("Something Went Wrong")  
    }
}


const updateTournament=async(req,res)=>{
    try {
       const edit=await tournament.findById(req.params.id)
       if(!edit){
        return res.status(404).send({message:"Tournament not found",success:false})
       } 
       return res.status(200).send({message:"Edited",success:true,data:edit})
    } catch (error) {
        console.log(error.message)
        return res.status(500).send("Something Went Wrong")  
    }
}
const tournamentById=async(req,res)=>{
    try {
        const tournamentId=await tournament.findById(req.params.id)
        if(!tournamentId){
    return res.status(404).send({message:"Tournament not found",success:false})
        }
        return res.status(200).send({message:"Fetched",success:true,data:tournamentId})
    } catch (error) {
         console.log(error.message)
        return res.status(500).send("Something Went Wrong")  
    }
}

module.exports={createTournament,updateTournament,tournamentById}