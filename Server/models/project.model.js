const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Prjoect is Collection of the tasks.
 * it has own id and shared_user.
 */
const projectSchema = Schema({
  title: { type: String, default: 'Primary' },
  registered: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  create_account: { type: String, defulat: 'user1' },
  shared_accounts: [{ type: String, defulat: 'user2' }],
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
