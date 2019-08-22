'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const express = require('express');
var router = express.Router();

router.get('/hello', (req, res) => {
    res.send(`Hello world from inside the routes folder.`);
});

const wordsname = require('./wordsname');
router.use('/words', wordsname);


module.exports = router;