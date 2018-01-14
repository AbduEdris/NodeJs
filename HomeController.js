
var path = require('path');

module.exports.index = function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    console.log("Home");
}


module.exports.login = function (req, res) {
    res.sendFile(path.join(__dirname, "login.html"));
}

module.exports.signup = function (req, res) {
    res.sendFile(path.join(__dirname, "signup.html"));
}




