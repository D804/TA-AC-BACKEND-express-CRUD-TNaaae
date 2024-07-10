// require
const express = require('express');
let mongoose = require('mongoose');
let path = require('path');
let userRouter = require('./routes/user');
// connect to mongodb
mongoose
  .connect('mongodb://localhost/dataUser')
  .then(() => {
    console.log('connected to mongod');
  })
  .catch((err) => {
    console.log(err);
  });

// instantiate express
let app = express();
// ejs setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
// routes
// app.use('/', indexRouter);
app.use('/users', userRouter);

// Error handling middlewares
app.use((req, res, next) => {
  res.send('Page not found');
});
// custom error handler
app.use((err, req, res, next) => {
  res.send(err);
});

// listen
app.listen(5000, () => {
  console.log('Running on port 5k');
});
