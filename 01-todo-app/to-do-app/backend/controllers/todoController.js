const todoModel = require("../models/todoModel");


//create todo
const createtodoController= async (req,res)=>{
  try{
    const {
      title,
      description,
      createdBy,
    } = req.body;

    if(!title){
      return res.status(500).send({success:false,message:'title is required'});
    } 
    if(!description){
      return res.status(500).send({success:false,message:'description is required'});
    } 
    const todo= new todoModel({
      title,
      description,
      createdBy,
    })
    const result= await todo.save();
    return res.status(201).send({success:true,message:'todo created successfully',result});
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: 'create todo error', error: err.message });
  }
  
}

//get todo
const gettodoController= async (req,res)=>{
  try{
    const {id}=req.params;

    if(!id){
      return res.status(404).send({
        success:false,
        message:'No user found with this ID'
      })
    }

    const todo= await todoModel.find({createdBy:id});
    if(!todo){
      return res.status(404).send({
        success:false,
        message:'No todo found with this ID'
      })
    }
    return res.status(200).send({success:true,message:'todo fetched successfully',todo});
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: 'get todo error', error: err.message });
  }
}


// delete API

const deletetodoController= async (req,res)=>{
  try{
    const {id}=req.params;
    if(!id){
      return res.status(404).send({
        success:false,
        message:'No todo found with this ID'
      })
    }
    //find ID
    const todo=await todoModel.findById({_id:id});
    if(!todo){
      return res.status(404).send({
        success:false,
        message:'No todo found with this ID'
      })
    }
    const result=await todoModel.findByIdAndDelete({_id:id});
    return res.status(200).send({
      success:true,
      message:'todo deleted successfully',
      result
    })

  }catch(err){
    console.log(err);
    return res.status(500).send({
      success:false,
      message:'delete todo error',
      error:err.message
    })
  }


}

module.exports={createtodoController,gettodoController,deletetodoController};