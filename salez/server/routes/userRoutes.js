const { LoginUser, RegisterUser, getCurrentUser } = require("../controllers/userController");
const auth = require("../middleware/auth");

const UserRouter = require("express").Router();

UserRouter.post('/login',LoginUser)
UserRouter.post('/register',RegisterUser)
UserRouter.get('/current',auth,getCurrentUser)

module.exports={UserRouter}
