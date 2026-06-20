const express = require("express");

//rest object
const app=express();

//middlewares
app.use(express.json());

//routes
app.get('/test',(req,res)=>{
  res.status(200).send('<h1>Welcome to To-do App MERN Node Server </h1>');
})

//port
const PORT=8080

//listen
app.listen(PORT,()=>{
  console.log('Server is Running on Port',PORT);
})