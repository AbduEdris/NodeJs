

// Route modules 
var fs = require('fs');
var abdi = new Object();
var express = require('express');
var app = express();
var path = require('path');
var routeElectronics = require('./ElectronicsRoutes');
var ctrHome = require('./HomeController');

app.use('/public', express.static(path.join(__dirname,'public')))
 

// Home page links and controllers
app.get('/', ctrHome.index);
app.get('/login', ctrHome.login);
app.get('/signup', ctrHome.signup);


//Electronics page links and  controllers
app.use('/electronics', routeElectronics);
app.use('/electronics/computers',routeElectronics);
app.use('/electronics/phones',routeElectronics);
app.use('/electronics/tablets',routeElectronics);


app.listen(8000);