const mongoose = require('mongoose')
  , Schema = mongoose.Schema
  
var taskSchema = Schema({
  title    : String,
  registered : { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  due_date : Date,
  is_completed : {type : Boolean , default : false},
  contents : String,
  tags : [String],
  repeat_days : Number
});

// var storySchema = Schema({
//   _creator : { type: Number, ref: 'Person' },
//   title    : String,
//   fans     : [{ type: Number, ref: 'Person' }]
// });
// var Story  = mongoose.model('Story', storySchema);
var Task = mongoose.model('Task', taskSchema);

module.exports = Task;