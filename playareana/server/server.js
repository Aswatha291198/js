const express=require("express")
const app=express()
require("dotenv").config();
const connectDB=require('./config/db');
const userRoute = require("./route/userRoute");
const turfRouter = require("./route/turfeRoute");

connectDB() 
app.use(express.json())
app.use('/api/turfo/user',userRoute)
app.use('/api/turfo/ground',turfRouter)

const port=8082
app.listen(port,()=>{
    console.log(`Server is Running on the http://localhost:${port}`);
    
})