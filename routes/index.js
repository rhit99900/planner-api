const express = require('express');
const router = express.Router();
const { register } = require('../controllers/userController');
const { handleErrors } = require('../middleware');

/* GET home page. */
router.get('/', (req, res, next)  => {
  res.send('/');
});

router.post('/login', (req, res, next)  => {
  res.send('/');
});

router.post('/register', handleErrors(register));

router.put('/forgot-password', (req, res, next)  => {
  res.send('/');
});

module.exports = router;
