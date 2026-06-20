const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

//env config
dotenv.config();

//rest object
const app=express();


//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get('/test',(req,res)=>{
  res.status(200).send('<h1>Welcome to To-do App MERN Node Server </h1>');
})

//port
const PORT=process.env.PORT||8080

//listen
app.listen(PORT,()=>{
  console.log(`Server is Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
})
