const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const OrganisationSchema = new Schema({
  name: String,  
  slug: String,
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }],
  members:[{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  status: Number,

})

OrganisationSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Organisation',OrganisationSchema);