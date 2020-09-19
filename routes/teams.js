const express = require('express');
const router = express.Router();

// GET Teams : /teams 
router.get('/', (req, res, next)  => {
  res.send('/teams');
});

// GET Team : /teams/:id 
router.get('/:id', (req, res, next)  => {
  res.send('/teams/:id');
});


// POST Teams : /teams
router.post('/', (req, res, next)  => {
  res.send('/teams');
});

// PUT Team : /teams/:id
router.put('/:id', (req, res, next)  => {
  res.send('/teams/:id');
});

// DELETE Team : /teams/:id
router.delete('/:id', (req, res, next)  => {
  res.send('/teams/:id');
});




module.exports = router;