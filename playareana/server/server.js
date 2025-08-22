const express=require("express")
const app=express()
require("dotenv").config();
const connectDB=require('./config/db');
const userRoute = require("./route/userRoute");
const turfRouter = require("./route/turfeRoute");
const gameRouter = require("./route/gameRoute");

connectDB() 
app.use(express.json())
app.use('/turfo/user',userRoute)
app.use('/turfo/turfs',turfRouter)
app.use('/turfo/game',gameRouter)
const port=8082
app.listen(port,()=>{
    console.log(`Server is Running on the http://localhost:${port}`);
    
})