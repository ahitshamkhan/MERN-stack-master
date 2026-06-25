const express = require('express');
const { createtodoController ,gettodoController } = require('../controllers/todoController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

//create todo
router.post('/create', authMiddleware, createtodoController);

//get Todo
router.post('/getall/:id', authMiddleware, gettodoController);

//export
module.exports = router;  