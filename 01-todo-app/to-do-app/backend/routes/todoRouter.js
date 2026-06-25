const express = require('express');
const { createtodoController } = require('../controllers/todoController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

//create todo
router.post('/create', authMiddleware, createtodoController);

//export
module.exports = router;  