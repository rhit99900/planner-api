const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  first_name: String,
  last_name: String,
  name: String,
  is_email_verified: Boolean,
  status: Number,
  is_admin: Boolean,
  is_manager: Boolean,
  is_collaborator: Boolean,
  added_on: {
    type: Date,
    default: Date.now
  },
  updated_on: {
    type: Date,
    default: Date.now
  },

})

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',UserSchema);