const { loginUser, registerUser, getCurrentUser, UpdateUser } = require("../controllers/userCon")
const auth = require("../middleware/auth")

const userRoute=require("express").Router()

userRoute.post('/login',loginUser)
userRoute.post('/register',registerUser)
userRoute.get('/current',auth,getCurrentUser)
userRoute.post('/update-user',UpdateUser)
module.exports=userRoute