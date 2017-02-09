const TaskController = (Task) => {
  // Task Object for return.
  const TaskObj = {};

  TaskObj.PostTask = (req, res) => {
    // console.log(req.body);
    const newTask = new Task(req.body);
    newTask.save((err, task) => {
      if (err) {
        res.json({ status: false, error: err.message });
        return;
      }
      res.json({ status: true, task });
    });
  };

  TaskObj.GetTask = (req, res) => {
    Task.find((err, tasks) => {
      if (err) {
        res.json({ status: false, error: 'Something went wrong' });
      }
      res.json({ status: true, tasks });
      return tasks;
    });
  };

  TaskObj.UpdateTask = (req, res) => {
    Task.findById(req.body.id, (err, task) => {
      const result = task;
      result.isCompleted = req.body.isCompleted;
      result.save((error) => {
        if (error) {
          res.json({ status: false, error: 'Status not updated' });
        }
        res.json({ status: true, message: 'Status updated successfully' });
      });
    });
  };

  TaskObj.DeleteTask = (req, res) => {
    Task.remove({ _id: req.body.id }, (err) => {
      if (err) {
        res.json({ status: false, error: 'Deleting todo is not successfull' });
      }
      res.json({ status: true, message: 'Todo deleted successfully' });
      // console.log(todos);
    });
  };
  return TaskObj;
};

module.exports = TaskController;
