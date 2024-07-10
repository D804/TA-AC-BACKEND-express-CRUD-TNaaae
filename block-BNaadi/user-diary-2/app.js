// require
const express = require('express');
let mongoose = require('mongoose');
let indexRoutes = require('./routes/index');
let userRoutes = require('./routes/user');
// mongoose connection
mongoose.connect('mobngodb://localhost/netpay').then(() => {
  console.log('Connected to mongodb').catch((err) => {
    console.log(err);
  });
});
// intansiate

let app = express();
// ejs setup
app.use('view engine', 'ejs');
// middlewares
app.use('/', indexRoutes);
app.use('/users', userRoutes);

// listening
app.listen(3000, () => {
  console.log('Running on port 3K');
});
