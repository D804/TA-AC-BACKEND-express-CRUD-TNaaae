let express = require('express');
let router = express.Router();
let User = require('../models/User');
router.post('/', async (req, res, next) => {
  let userData = req.body;
  console.log(userData);
  try {
    await User.create(userData);
    //   const users = await User.find({});
    res.redirect('/users');
  } catch (err) {
    next(err);
  }
});
router.get('/', async (req, res, next) => {
  let userData = req.body;
  console.log(userData);
  try {
    await User.find({});
    //   const users = await User.find({});
    res.redirect('/users');
  } catch (err) {
    next(err);
  }
});
router.get('/list', async (req, res, next) => {
  try {
    const users = await User.find({});
    res.render(res.render('listUsers', { users }));
  } catch (err) {
    next(err);
  }

  User.find({}, (err, user) => {
    if (err) return next(err);
  });
});
// single userfinder
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.render('single', { user: user });
  } catch (err) {
    next(err);
  }
});
// update user
router.put('/:id', (req, res) => {
  let id = req.params.id;
  User.findByIdAndUpdate(id, (err, user) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});
// Delete
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndDelete(id);
  res.redirect('/users');
});
