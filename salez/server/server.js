const express=require("express")
const app=express()
require("dotenv").config();
const connectDB=require('./config/db')
connectDB() 
app.use(express.json())
const { UserRouter } = require("./routes/userRoutes")
const { JobRouter } = require("./routes/jobRoutes")
app.use('/salez/user',UserRouter)
app.use('/salez/jobs/',JobRouter)

const port=8082
app.listen(port,()=>{
    console.log(`Server is Running on the http://localhost:${port}`);
    
})