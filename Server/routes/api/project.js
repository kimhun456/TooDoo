var express = require('express');
var router = express.Router();

const Task = require('../../models/task.model');
const Project = require('../../models/project.model');
const ProjectController = require('../../controllers/project.controller')(Project, Task);


/* GET users listing. */
router.get('/', ProjectController.GetProject);
router.post('/', ProjectController.PostProject);
router.put('/', ProjectController.UpdateProject);
router.delete('/', ProjectController.DeleteProject);

module.exports = router;
