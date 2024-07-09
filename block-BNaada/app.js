// require
const express = require('express');
let mongoose = require('mongoose');
let path = require('path');
let indexRoute = require('./routes/index');
let userRoutes = require('./routes/user');
// connect to mongodb
mongoose
  .connect('mongodb://localhost/user')
  .then(() => console.log('connected'))
  .catch((err) => {
    console.log(err);
  });
// instantiate
let app = express();
// ejs setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoute);
app.use('/users', userRoutes);
// Error handle middleare
app.use((req, res, next) => {
  res.send('Page Not Found');
});
app.use((err, req, res, next) => {
  res.send(err);
});
// listener
app.listen(4000, () => {
  console.log('Running on port 4k');
});
