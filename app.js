
var http = require('http');
var fs = require('fs');
var abdi = new Object();
var express = require('express');
var app = express();
var path = require('path');

app.get('/',function(req,res){
    fs.readFile('index.html', function (err, data) {
        res.write(data);
        res.end();
});
});

app.get('/login',function(req,res){
    fs.readFile('login.html', function (err, data) {
        res.write(data);
        res.end();
});
});

app.get('/signup',function(req,res){
    fs.readFile('signup.html', function (err, data) {
        res.write(data);
        res.end();
});
});

app.listen(8000);