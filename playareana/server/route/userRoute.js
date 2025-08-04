const { loginUser, registerUser, getCurrentUser } = require("../controllers/userCon")
const auth = require("../middleware/auth")

const userRoute=require("express").Router()

userRoute.post('/login',loginUser)
userRoute.post('/register',registerUser)
userRoute.get('/current',auth,getCurrentUser)
module.exports=userRoute