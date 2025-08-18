const { RegisterUser, LoginUser,CurrentUser } = require("../controllers/userController")
const auth = require("../middleware/auth")

const UserRouter=require("express").Router()

UserRouter.post('/register',RegisterUser)
UserRouter.post('/login',LoginUser)
UserRouter.get('/current',auth,CurrentUser)


module.exports=UserRouter