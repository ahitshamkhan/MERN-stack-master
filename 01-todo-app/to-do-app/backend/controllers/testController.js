const express = require('express');

const testController = (req, res) => {
    res.status(200).send('<h1>Test Controller</h1>');
}

//export
module.exports = {testController};

