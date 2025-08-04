const User=require('../model/userModel')
const jwt=require("jsonwebtoken")
const bcrypt=require('bcrypt')

const registerUser=async (req,res)=>{
    console.log('error in backend register');
    console.log(req.body);//it is coming to this line
    
    
    try {
        const user=await User.findOne({email:req.body.email})
        if(user){
            return res.status(409).send({message:"User Already exists",success:false})
        }
        const salt=10
        const hashedPassword= await bcrypt.hash(req.body.password,salt)
        const newUser=await User.create({...req.body,
            password:hashedPassword}
        )
        return res.status(201).send({message:"User created successfully",success:true,data:newUser})
    } catch (error) {
        console.error("Error in registerUser:", error); 
         return res.status(500).send({message:"Something went wrong",success:false})
    }
}
const loginUser=async (req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email})
        if(!user){
            return res.status(404).send({message:"user not found",success:false})
        }
        
        const isMatch = await bcrypt.compare(req.body.password, user.password);

        const token=jwt.sign({userid:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})
        return res.status(201).send({message:"Welocome user",success:true,data:token})
    } catch (error) {
         return res.status(500).send({message:"Something went wrong",success:false})
    }
}
const getCurrentUser = async (req, res) => {
    console.log('backend current user');
    try {
        const currentUser = await User.findById(req.userid)
        if (!currentUser) {
            return res.status(404).send({ message: "User Not Found" })
        }
        return res.status(200).send({ message: 'Welcome User', data: currentUser, success: true })
    } catch (error) {
        return res.status(500).send("something went wrong")
    }}

module.exports= {loginUser,registerUser,getCurrentUser}