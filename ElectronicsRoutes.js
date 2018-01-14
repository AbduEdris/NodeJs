
var express = require('express');
var router = express.Router();

var controller = require('./ElectronicsController');

router.get('/', controller.electronics);
router.get('/computers', controller.computers);
router.get('/phones', controller.phones);
router.get('/tablets', controller.tablets);

module.exports = router;
