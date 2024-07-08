const express = require('express');
let router = express.Router();
let User = require('../model/User');
router.get('/new', (req, res) => {
  res.render('form');
});
router.post('/', (req, res) => {
  console.log(req.body);
  User.create(req.body)
    .then(() => res.render('index'))
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
