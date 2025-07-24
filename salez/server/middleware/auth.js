const jwt= require('jsonwebtoken')

const auth=(req,res,next)=>{
    try {
        const authHead= req.headers
        if(!authHead){
            return res.status(404).send("Token not found")
        }
        const token=req.headers.authorization.split(" ")[1]
        console.log(token,'from auth');
        const verifiedToken=jwt.verify(token ,process.env.JWT_SECRET)
        console.log('verifiedToken',verifiedToken);
        req.userid=verifiedToken.userid
        next()
        
    } catch (error) {
        return res.status(500).send("Something Went Wrong")
    }

}
module.exports=auth