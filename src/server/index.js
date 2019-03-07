const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

// Initiate our app
const app = express();
// app.use(require('morgan')('dev'));

// Configure our app
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));


// Configure Mongoose
mongoose.connect('mongodb://localhost:27017/app1', { useNewUrlParser: true });

// Models & routes
require('./models/Users');
require('./models/Posts');
app.use(require('./routes'));


app.listen(8000, () => console.log('Server running on http://localhost:8000/'));
