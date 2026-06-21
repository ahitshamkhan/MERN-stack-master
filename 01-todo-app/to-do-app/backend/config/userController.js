const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //validation
    if (!username || !email || !password) {
      return res.status(400).send({
        sucess: false,
        message: "Please provide name,email and password",
      });

      //check existings user

      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).send({
          sucess: false,
          message: "User already exists",
        });     
      }

      //save user
      const newUser = new userModel({ username, email, password });
      await newUser.save();
      res.status(201).send({
        success: true,
        message: "User Register successfully",
        newUser,
      });
    }

  } catch (err) {
    console.log(err);
    res.status(500).send({
      sucess: false,
      message: "Register API",
      err,
    });
  }
};

module.exports = { registerController };
