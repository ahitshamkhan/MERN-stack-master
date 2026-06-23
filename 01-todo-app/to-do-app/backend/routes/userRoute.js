const express = require("express");
const router = express.Router();
const {registerController,loginController}=require('../controllers/userController')
//routes
//Register || PORT
router.post('/register',registerController)

//Login || PORT
router.post('/login',loginController)


//export
module.exports = router;