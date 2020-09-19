const User = require('../models/user');

module.exports = {
  register (req, res, next){
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

    User.register(newUser, req.body.password, error => {
      if(error){
        console.log('Error');
        return next(error);
      }

      console.log('Registered');
      res.send('User Registered');
    })
  }
}