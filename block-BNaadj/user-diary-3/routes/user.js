let express = require('express');
let router = express.Router();
let User = require('../models/User');
router.get('/new', (req, res, next) => {
  res.render('userform');
});
router.post('/', (req, res, next) => {
  User.create(req.body);
  res.render('userlist', { user: user });
});
module.exports = router;
