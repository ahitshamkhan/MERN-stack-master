const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors=require('colors');
const cors=require('cors');
const connectDB=require('./config/db')

//env config
dotenv.config();

//databse connect
connectDB();

//rest object
const app=express();


//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use('/api/v1/test',require('./routes/testRouter'));
app.use('/api/v1/user',require('./routes/userRoute'));

//port
const PORT=process.env.PORT||8080

//listen
app.listen(PORT,()=>{
  console.log(`Server is Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgMagenta);
})
