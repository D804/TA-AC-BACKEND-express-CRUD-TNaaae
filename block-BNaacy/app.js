// require
const express = require('express');
let mongoose = require('mongoose');
let userRouter = require('./routes/user');
let indexRouter = require('./routes/index');
// mngodb connection
mongoose
  .connect('mongodb://localhost/userdata')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// intansiate
let app = express();

app.set('view engine', 'ejs');
//  middleware
app.use(express.urlencoded({ extended: false }));
app.use('/users', userRouter);
app.use('/', indexRouter);
// listen
app.listen(3000, () => {
  console.log('Running on port 3k');
});
