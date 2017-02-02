var express = require('express');
var router = express.Router();

const account = require('./account');
const project = require('./project');
const task = require('./task');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('route to API');
});

// routing API 
router.use('/account', account);
router.use('/project', project);
router.use('/task', task);


module.exports = router;
