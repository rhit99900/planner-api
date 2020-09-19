const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  name: String,  
  slug: String,  
  members:[{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  status: Number,
})

TeamSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Team',TeamSchema);