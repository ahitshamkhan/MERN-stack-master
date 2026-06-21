const express = require("express");
const router = express.Router();
const {registerController}=require('../config/userController')

//routes
//Register || PORT
router.post('/register',registerController)




//export
module.exports = router;