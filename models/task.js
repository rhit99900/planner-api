const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: String,  
  assigned_to: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  assgned_by:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },  
  status: String,
})

TaskSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Task',TaskSchema);