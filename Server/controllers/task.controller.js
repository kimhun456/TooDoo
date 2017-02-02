const TaskController = function(Task){

    var TaskObj = {};

    TaskObj.PostTask = function(req,res,next){
        var newTask = new Task(req.body);
		newTask.save(function(err, task){
			if(err){
				res.json({status: false, error: err.message});
				return;
			}
			res.json({status: true, task: task});
		});
    }

    TaskObj.GetTask = function(req,res,next){
        Task.find(function(err, tasks){
			if(err) {
				res.json({status: false, error: "Something went wrong"});
				return;
			}
			res.json({status: true, tasks: tasks});
		});
    }

    TaskObj.UpdateTask = function(req,res,next){
        var is_completed = req.body.is_completed;
		Task.findById(req.body._id, function(err, task){
			task.is_completed = is_completed;
			task.save(function(err, task){
				if(err) {
					res.json({status: false, error: "Status not updated"});
				}
				res.json({status: true, message: "Status updated successfully"});
			});
		});

    }

    TaskObj.DeleteTask = function(req,res,next){
        Task.remove({_id : req.body._id }, function(err, todos){
			if(err) {
				res.json({status: false, error: "Deleting todo is not successfull"});
			}
			res.json({status: true, message: "Todo deleted successfully"});
		});
    }
    return TaskObj;
}

module.exports =  TaskController;