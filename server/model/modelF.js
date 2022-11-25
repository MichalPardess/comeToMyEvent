const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    numOfF : String,
    numOfM : String,
    status : String,
    notes : String
})

const Freimandb = mongoose.model('Freimandb', schema);
module.exports = Freimandb;