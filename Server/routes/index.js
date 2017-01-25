
var express = require('express');
var account = require('./account');
var task = require('./task');

var router = express.Router();
router.use('/task',task);
router.use('/account', account);

module.exports = router;