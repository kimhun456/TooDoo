/**
 * Controller for Prjoect Manage
 * @return the object has basic RESTFUL functions.
 */
const ProjectController = (Project) => {
  const ProjectObj = {};

  ProjectObj.PostProject = (req, res) => {
    const newProject = new Project(req.body);
    newProject.save((err, project) => {
      if (err) {
        res.status(500).json({ status: false, error: err.message });
        return;
      }
      res.json({ status: true, project });
    });
  };

  ProjectObj.GetProject = (req, res) => {
    Project.find((err, projects) => {
      if (err) {
        res.status(500).json({ status: false, error: err.message });
      }
      res.json({ status: true, projects });
      return projects;
    });
  };

  ProjectObj.UpdateProject = (req, res) => {
    Project.findById(req.body.id, (err, project) => {
      const modifiedProject = project;
      modifiedProject.sharedAccounts = req.body.sharedAccounts;
      modifiedProject.save((error) => {
        if (error) {
          res.status(500).json({ status: false, error: err.message });
        }
        res.json({
          status: true,
          message: 'Status updated successfully',
        });
      });
    });
  };

  ProjectObj.DeleteProject = (req, res) => {
    Project.remove({ _id: req.body.id }, (err) => {
      if (err) {
        res.status(500).json({ status: false, error: err.message });
      }
      res.json({ status: true, message: 'Todo deleted successfully' });
    });
  };
  return ProjectObj;
};

module.exports = ProjectController;
