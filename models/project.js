const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: String,  
  slug: String,  
  tasks:[{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }],
  status: Number,
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

ProjectSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Project',ProjectSchema);