const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// define schema
const taskSchema = Schema({
  title: String,
  registered: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  dueDate: Date,
  isCompleted: { type: Boolean, default: false },
  contents: String,
  tags: [String],
  repeat_days: Number,
  projectId: { type: Schema.Types.ObjectId, ref: 'Project' },
});

// modeling Schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
