const express = require('express');
const Task = require('../../models/task.model');
const TaskController = require('../../controllers/task.controller')(Task);

const router = express.Router();

router.get('/', TaskController.GetTask);
router.post('/', TaskController.PostTask);
router.put('/', TaskController.UpdateTask);
router.delete('/', TaskController.DeleteTask);

module.exports = router;
