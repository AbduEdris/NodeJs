
var path = require('path');
/* var express = require('express');
var router = express.Router();
 */

module.exports.electronics = function (req, res) {
    res.sendFile(path.join(__dirname, 'electronics.html'));
    console.log("Electronics");
}

module.exports.computers = function (req, res) {
    res.sendFile(path.join(__dirname, 'computers.html'));
    console.log("Computers");

}
module.exports.phones = function (req, res) {
    res.sendFile(path.join(__dirname, 'phones.html'));
    console.log("Phones");

}
module.exports.tablets = function (req, res) {
    res.sendFile(path.join(__dirname, 'tablets.html'));

}

/* 
router.get('/', module.exports.electronics);
router.get('/computers', module.exports.computers);
router.get('/phones', module.exports.phones);
router.get('/tablets', module.exports.tablets);

module.exports = router;
 */