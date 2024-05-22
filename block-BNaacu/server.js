const express = require('express');
let path = require('path');
let app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

