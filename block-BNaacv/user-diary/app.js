const express = require('express');
let userData = require('./routes/user');
let app = express();

// setup ejs
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use('/users', userData);

app.listen(4000, () => {
  console.log('Running on port 4k');
});
