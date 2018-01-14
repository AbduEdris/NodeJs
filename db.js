
var mongoose = require('mongoose');
mongoose.prmise = require('bluebird');
var mongoDB = 'mongodb://localhost/Ahmu';
mongoose.connect(mongoDB, function (err, err) {
    if (err) {
        console.log('Error in DB connectivity   ' + error);
    }
    else {
        console.log('MongoDB connected  ' + mongoDB);
    }
});
