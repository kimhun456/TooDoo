const ProjectController = function(Project, Task){

    var ProjectObj = {};

    var obj = {
        title : "example"
    };


    ProjectObj.PostProject = function(req,res,next){
        var newProject = new Project(obj);
		newProject.save(function(err, project){
			if(err){
                res.status(500).json({status: false, error: err.message});
                console.log("PostProject is not successfull")
				return;
			}
            res.json({status: true, project: project});
		});
    }

    ProjectObj.GetProject = function(req,res,next){
        Project.find(function(err, projects){
			if(err) {
				res.status(500).json({status: false, error: err.message});
                console.log("GetProject is not successfull")
				return;
			}
			res.json({status: true, projects: projects});
		});
    }

    ProjectObj.UpdateProject = function(req,res,next){
		Project.findById(req.body._id, function(err, project){
			project.save(function(err, project){
				if(err) {
					res.status(500).json({status: false, error: err.message});
                    console.log("Update Project is not successfull")
				}
				res.json({status: true, message: "Status updated successfully"});
			});
		});

    }

    ProjectObj.DeleteProject = function(req,res,next){
        Project.remove({_id : req.body._id }, function(err, todos){
			if(err) {
				res.status(500).json({status: false, error: err.message});
                console.log("Deleting Project is not successfull");
			}
			res.json({status: true, message: "Todo deleted successfully"});
		});
    }
    return ProjectObj;
}

module.exports =  ProjectController;