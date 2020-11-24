const User = require('../models/user');
const passport = require('passport');

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
  },

  async login (req, res){    
    passport.authenticate('local', (error, user, info) => {
      if(error) { res.status(500).json(error); }
      if(!user){
        res.status(404).json(info);
      }
      req.login(user, error => {
        if(error) { res.status(404).json(error); }
        return res.status(200).json(user);
      })
    })(req, res);
  }
}