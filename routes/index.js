const express = require('express');
const router = express.Router();
const { register } = require('../controllers/userController');
const { handleErrors } = require('../middleware');

const passport = require('passport');

/* GET home page. */
router.get('/', (req, res)  => {
  res.send('/');
});

router.post('/login', passport.authenticate('local'), (req, res)  => {
  res.status(200).json();
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('Logged Out');
})

router.post('/register', handleErrors(register));

router.put('/forgot-password', (req, res, next)  => {
  res.send('/');
});

module.exports = router;
