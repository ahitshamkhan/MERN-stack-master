const express = require('express');
const { createtodoController } = require('../controllers/todoController');

const router = express.Router();

//create todo
router.post('/create',createtodoController);

//export
module.exports = router;  