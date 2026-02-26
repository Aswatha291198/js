const User = require('../Model/userModel')
const jwt = require("jsonwebtoken")

const RegisterUser = async (req, res) => {
    console.log('register user');

    try {
        const existingUser = await User.findOne({ email: req.body.email })
        if (existingUser) {
            return res.send({ message: "User Already Exists", success: true })
        }
        const newUser = User.create(req.body)
        return res.status(201).send({ message: "User Created Successfully", success: true, data: newUser })

    } catch (error) {
        return res.status(500).send("something went wrong")
    }
}
const LoginUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email })
        if (!existingUser) {
            return res.send({ message: "User Not Found", success: false })
        }
        if (existingUser.password !== req.body.password) {
            return res.send({ message: "Wrong Password", success: false })
        }
        const token = jwt.sign({ userid: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
        return res.status(200).send({ message: "Login Successful",data:token,success:true  })


    } catch (error) {
        return res.status(500).send("something went wrong")
    }
}
const CurrentUser = async (req, res) => {
    console.log('backend current user');
    try {
        const currentUser = await User.findById(req.userid)
        if (!currentUser) {
            return res.status(404).send({ message: "User Not Found" })
        }
        return res.status(200).send({ message: 'Welcome User', data: currentUser, success: true })
    } catch (error) {
        return res.status(500).send("something went wrong")
    }
}
const forgetPassword=async(req,res)=>{
    try {
        const {email}=req.body
        if(!email){
            return res.status(404).send({
                success:false,
                message:'Please enter the email for forget password'
            })
        }
        let user=await User.find({email:email})
        if(user===null){
            return res.status(404).send({
                success:false,
                message:'User not found'
            })
        }
        else if(user?.otp !== undefined && user.otp<user?.otpExpiry){
            return res.json({
                success:false,
                message:'Please useotp sent on mail'
            })
        }
        const otp=Math.floor(Math.random() * 10000 + 90000)
        user.otp=otp
        user.otpExpiry=Date.now() +10 * 60 +1000
        await user.save()
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:'Something went wrong'
        })
    }
}


module.exports = { RegisterUser, LoginUser, CurrentUser,forgetPassword }