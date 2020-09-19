var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)  => {
  res.send('/');
});

router.post('/login', (req, res, next)  => {
  res.send('/');
});

router.post('/register', (req, res, next)  => {
  res.send('/');
});

router.put('/forgot-password', (req, res, next)  => {
  res.send('/');
});

module.exports = router;
