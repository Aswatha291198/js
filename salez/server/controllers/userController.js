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

module.exports = { RegisterUser, LoginUser, CurrentUser,UpdateUser }