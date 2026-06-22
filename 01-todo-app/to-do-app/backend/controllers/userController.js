const userModel = require("../models/userModel");
const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // validation
    if (!username || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please provide name, email and password",
      });
    } 

    // check existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User already exists",
      });
    }

    // save user
    const newUser = new userModel({ username, email, password });
    await newUser.save();
    res.status(201).send({
      success: true,
      message: "User Register successfully",
      newUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Register API",
      err,
    });
  }
};

// login controller
const loginController=async (req,res)=>{
    try {
        const {email,password}=req.body;
        
        //find user
        const user= await userModel.findOne({email,password});
      
        //validation
        if(!user){
            return res.status(400).send({
                success:false,
                message:"Please provide valid email and password"
            });
        }

        res.status(200).send({
            success:true,
            message:"Login successfull",
            user
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Login API",
            error
        })
    }
}

module.exports = { registerController,loginController};