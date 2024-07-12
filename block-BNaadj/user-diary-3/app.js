// require
const express = require('express');
let mongoose = require('mongoose');
let usersRoute = require('./routes/user');
// connect mongodb
mongoose
  .connect('mongodb://localhost/userDetails')
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.log(err);
  });
//   instantiate
let app = express();
// ejs setup
app.set('view engine', 'ejs');
// middlewares
app.use('/users', usersRoute);

app.listen(3000, () => {
  console.log('Running on port 3k');
});
