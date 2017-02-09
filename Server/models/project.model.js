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
  createAccount: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    index: true,
  },
  sharedAccounts: [{ type: Schema.Types.ObjectId, ref: 'Account', index: true }],
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
