var express = require('express');
var router = express.Router();

const Task = require('../../models/task.model');
const TaskController = require('../../controllers/task.controller')(Task);

router.get('/', TaskController.getTask);
router.post('/', TaskController.PostTask);
router.put('/', TaskController.UpdateTask);
router.delete('/', TaskController.DeleteTask);

module.exports = router;
