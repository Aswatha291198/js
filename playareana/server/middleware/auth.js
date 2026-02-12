const jwt=require('jsonwebtoken')

const auth=(req,res,next)=>{
    try {
        
        const token=req.headers.authorization.split(" ")[1]
    
        console.log(token,'from auth');
        const verifiedToken=jwt.verify(token,process.env.JWT_SECRET)
        console.log('verifiedToken',verifiedToken);
        req.userid=verifiedToken.userid
        next()
        
    } catch (error) {
        console.error("JWT Verify Error:", error.message); 
        return res.status(401).send("unauthorized")
    }

}
module.exports=auth