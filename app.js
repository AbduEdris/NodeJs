 
var fs = require('fs');
var abdi = new Object();
var express = require('express');
var app = express();
var path = require('path');
var ejsLayouts = require('express-ejs-layouts');


var db = require('./app_server/models/db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/app_server/views'));

app.use(ejsLayouts);

app.use('/public', express.static(path.join(__dirname,'public')))

//insert router 
require('./app_server/routes/RouteManager')(app);


app.listen(8000);
