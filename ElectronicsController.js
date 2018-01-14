
var path = require('path');

module.exports.electronics =  function(req,res){
    res.sendFile(path.join(__dirname, 'electronics.html'));
         
 }
 module.exports.computers =  function(req,res){
    res.sendFile(path.join(__dirname, 'computers.html'));
         
 }
 module.exports.phones =  function(req,res){
    res.sendFile(path.join(__dirname, 'phones.html'));
         
 }
 module.exports.tablets =  function(req,res){
    res.sendFile(path.join(__dirname, 'tablets.html'));
         
 }
 