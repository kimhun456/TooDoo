const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// define schema
const taskSchema = Schema({
  title: String,
  registered: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  due_date: Date,
  is_completed: { type: Boolean, default: false },
  contents: String,
  tags: [String],
  repeat_days: Number,
  project_id: { type: Schema.Types.ObjectId, ref: 'Project' },
});

// modeling Schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
