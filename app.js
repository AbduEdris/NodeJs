
// Module design 
var fs = require('fs');
var abdi = new Object();
var express = require('express');
var app = express();
var path = require('path');
var ctrElectronics = require('./ElectronicsController');
var ctrHome = require('./HomeController');

app.use('/public', express.static(path.join(__dirname,'public')))
 

// Home page links and controllers
app.get('/', ctrHome.index);
app.get('/login', ctrHome.login);
app.get('/signup', ctrHome.signup);


//Electronics page links and  controllers
app.get('/electronics',ctrElectronics.electronics);
app.get('/electronics/computers',ctrElectronics.computers);
app.get('/electronics/phones',ctrElectronics.phones);
app.get('/electronics/tablets',ctrElectronics.tablets);



app.listen(8000);