let express = require('express');
let router = express.Router();
let User = require('../models/User');
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send('User deleted successfully');
  } catch (err) {
    next(err);
  }
});
