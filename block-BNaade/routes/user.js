let express = require('express');
let router = express.Router();
let User = require('../models/User');
router.get('/new', (req, res, next) => {
  res.render('form');
});
router.post('/', async (req, res, next) => {
  console.log(req.body);
  try {
    await User.create(req.body);
    res.render('userlist', { user });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
