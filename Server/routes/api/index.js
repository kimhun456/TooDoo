const express = require('express');
const account = require('./account');
const project = require('./project');
const task = require('./task');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('route to API');
});

// route the  api
router.use('/account', account);
router.use('/project', project);
router.use('/task', task);

module.exports = router;
