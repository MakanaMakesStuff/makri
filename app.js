const express = require('express');
var app = express();
var routes = require('./routes');
const path = require('path');
const router = require('./routes');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(router);

app.listen(3000, ()=>{console.log("Server is listening on port 3000")});