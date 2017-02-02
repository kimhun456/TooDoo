const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


const projectSchema = Schema({
    title : {type : String, default : "Primary"},
    registered : { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    create_account : { type : String, defulat : "user1"},
    shared_accounts : [{ type : String, defulat : "user1"}]
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
