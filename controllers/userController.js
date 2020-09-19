const User = require('../models/user');

module.exports = {
  async register (req, res){
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      is_email_verified: false,
      first_name: req.body.first_name? req.body.first_name: "",
      last_name: req.body.last_name? req.body.last_name: "",
      status: 1,
      is_admin: false,
      is_manager: false,
      is_collaborator: false,      
    })    
    const user = await User.register(newUser, req.body.password)
    res.status(200).json(user);
  }
}