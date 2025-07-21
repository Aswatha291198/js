const { message } = require('antd')
const user = require('../Model/userModel')
const jwt = require('jsonwebtoken')

const LoginUser = async (req, res) => {
    const existuser = await user.findOne({ email: req.body.email });
    console.log("Logging in user:", existuser.name, existuser._id); // 🟢 Log

    if (!existuser) return res.send({ message: "User Not Found", success: false });
    if (existuser.password !== req.body.password) return res.send({ message: "Wrong Password", success: false });

    const token = jwt.sign({ userid: existuser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    console.log("JWT Token:", token); // 🟢 Log

    res.status(201).send({ success: true, message: "Login successful", data: token });
};

const RegisterUser = async (req, res) => {
    console.log(req.body);

    try {
        console.log('form register');

        const existingUser = await user.findOne({ email: req.body.email })
        if (existingUser) {
            return res.send({ message: "User Already Exist", success: false })
        }
        const newUser = await user.create(req.body)
        return res.status(201).send({ message: "User Created", data: newUser, success: true })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Something went wrong", error });
    }
}
const getCurrentUser = async (req, res) => {
    console.log(('getting the user'));

    const getUser = await user.findById(req.user.id).select("-password");
    console.log(getUser);

    if (!getUser) {
        return res.send({ message: "User Not Found" })
    }
    return res.status(200).send({ success: true, data: getUser })
}
const updateUser = async (req, res) => {
    try {

    } catch (error) {

    }
}
module.exports = { LoginUser, RegisterUser, getCurrentUser }
