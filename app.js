
var http = require('http');
var fs = require('fs');

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



var server = http.createServer(function (req, res) {
if (req.url=='/'){

    homeController(req, res);
    }

 
if (req.url=='/login'){
    
        loginController(req, res);
        }    
});

server.listen(8000);