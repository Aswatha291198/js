const Company= require('../Model/companyModel')

const AddCompany=async(req,res)=>{
    try {
        const company= await Company.create(req.body)
        return res.status(201).send({message:"Company Created",data:company})
        
    } catch (error) {
        return res.status(404).send({message:"Something Went Wrong"})
    }
}

const getAllCompany =async(req,res)=>{
    try {
        const allCompany=await Company.find()
        return res.status(200).send({message:"All Companies Fetched Successfully",data:allCompany})
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Failed to fetch companies" });
    }
}
const updateCompany =async(req,res)=>{
    try {
        const company=await Company.findById(req.body.id,req.body)
        if(!company){
            return res.status(404).send({message:"Company Not Found"})
        }

        return res.status(200).send({message:"All Companies Fetched Successfully",data:company})
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Down" });
    }
}

module.exports={AddCompany,getAllCompany}