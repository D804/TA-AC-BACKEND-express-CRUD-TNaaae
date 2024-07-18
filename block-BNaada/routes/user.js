let express = require('express');
let router = express.Router();
let User = require('../models/Users');
router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('user', { users: users });
  });
});
router.get('/new', (req, res) => {
  res.render('form');
});
router.post('/', (req, res, next) => {
  let userData = req.body;
  User.create(userData, (err, user) => {
    if (err) return next(err);
    res.redirect(302, '/users');
  });
});
router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('singleuser.ejs', { user: user });
  });
});

module.exports = router;
