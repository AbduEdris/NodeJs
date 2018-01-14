 
var fs = require('fs');
var abdi = new Object();
var express = require('express');
var app = express();
var path = require('path');

app.use('/public', express.static(path.join(__dirname,'public')))

var indexController = function(req,res){
   res.sendFile(path.join(__dirname, 'index.html'));
        console.log("Home");
}
var loginController = function(req,res){
    res.sendFile(path.join(__dirname, 'login.html'));
    console.log("Login");
    
}

var signupController = function(req,res){
    res.sendFile(path.join(__dirname, 'signup.html'));
    console.log("Signup");
    
}
app.get('/', indexController);
app.get('/login',loginController);
app.get('/signup',signupController);


app.listen(8000);