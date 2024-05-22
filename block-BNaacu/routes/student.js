let express = require('express');
let router = express.Router();
router.get('/students/new', (req, res) => {});
router.post('/students', (req, res) => {});
router.get('/students', (re, res) => {
  res.render('index', { list: ['Deep', 'Abhi', 'Rahul'] });
});
router.get('/students/:id', (req, res) => {
  res.render('./views/index');
});
