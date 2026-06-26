const express = require('express');
const { createtodoController, gettodoController, deletetodoController,    updatetodoController } = require('../controllers/todoController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

//create todo
router.post('/create', authMiddleware, createtodoController);

//get Todo
router.post('/getall/:id', authMiddleware, gettodoController);

//delete todo
router.post('/delete/:id', authMiddleware, deletetodoController);

//update todo
router.post('/update/:id', authMiddleware, updatetodoController); 


//export
module.exports = router;  
