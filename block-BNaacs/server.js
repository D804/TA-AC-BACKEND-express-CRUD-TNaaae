const express = require('express');
// const mongoose = require(mongoose);
// Mongodb connection
// mongoose.connect('mongodb://localhost/netplay', (err) => {
//   console.log(err ? err : 'Connection stablished');
// });
let app = express();

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});
app.listen(3000, () => {
  console.log('Running on port 3k');
});
