const express = require('express');
const router = express.Router();

// GET Organisation : /organistions 
router.get('/', (req, res, next)  => {
  res.send('/organisations');
});

// GET Organisation : /organistions 
router.get('/:id', (req, res, next)  => {
  res.send('/organisations');
});

router.get('/:id/members', (req, res, next)  => {
  res.send('/organisations/members');
});


module.exports = router;