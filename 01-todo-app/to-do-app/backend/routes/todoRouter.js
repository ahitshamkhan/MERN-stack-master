const express = require('express');
const { createtodoController, gettodoController, deletetodoController } = require('../controllers/todoController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

//create todo
router.post('/create', authMiddleware, createtodoController);

//get Todo
router.post('/getall/:id', authMiddleware, gettodoController);

//delete todo
router.post('/delete/:id', authMiddleware, deletetodoController);

//export
module.exports = router;  
