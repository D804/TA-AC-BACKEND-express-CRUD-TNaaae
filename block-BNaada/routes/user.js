let express = require('express');
let router = express.Router();
let User = require('../models/Users');
router.get('/', (req, res) => {
  res.render('');
});
router.post('/', (req, res) => {
  let userData = req.body;
  User.find({})
    .then((user) => {
      res.render('user', { userlist: user });
    })
    .catch((err) => {
      next(err);
    });

  res.render('form');
});
router.get('/:id', (req, res) => {
  let id = req.params.id;
  User.findById(id)
    .then((user) => {
      res.render('singleuser', { useerDetails: user });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
