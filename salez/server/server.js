const express=require("express")
const app=express()
require("dotenv").config();
const connectDB=require('./config/db');
const UserRouter = require("./routes/userRoutes");
connectDB() 
app.use(express.json())
app.use('/salez/user/',UserRouter)

const port=8082
app.listen(port,()=>{
    console.log(`Server is Running on the http://localhost:${port}`);
    
})