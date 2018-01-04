
var http = require('http');
var fs = require('fs');
var abdi;
abdi = new Object();

var homeController = function(req, res){
    fs.readFile('index.html', function (err, data) {
        res.write(data);
        res.end();
});
}

var loginController = function(req, res){
    fs.readFile('login.html', function (err, data) {
        res.write(data);
        res.end();
});
}

abdi['/']=homeController;
abdi['/login']=loginController;


var server = http.createServer(function (req, res) {

if (req.url in abdi)
abdi[req.url](req, res);

});

server.listen(8000);