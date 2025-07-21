const { message } = require('antd');
const jwt=require('jsonwebtoken')

const auth=(req,res,next)=>{
    try {
        const authHeader=req.headers.authorization
        if(!authHeader){
            return res.status(404).send("Invalid token")
        }
        console.log(req.headers.authorization,'headers from auth');
        const token=req.headers.authorization.split(" ")[1]
        console.log(token,'token');
        const verifiedToken=jwt.verify(token,process.env.JWT_SECRET)
        console.log(verifiedToken,'token verifued');
        req.user = { id: verifiedToken.userid }
        next()
        
    } catch (error) {
        return res.status(401).send({message:"Unauthorized"})
    }
}
module.exports=auth