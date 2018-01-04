
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    
if (req.url=='/'){

    fs.readFile('index.html', function (err, data) {
        res.write(data);
        res.write("Abdu Edris  ");
        res.end();

    });

}

    
if (req.url == '/login'){
    
    fs.readFile('login.html', function (err, data) {
        res.write(data);
        res.write("Abdu Edris  ");
        res.end();

    });
    }
    

    
});

server.listen(8000);