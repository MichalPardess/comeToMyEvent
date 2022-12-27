const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        unique: true
    },
    numOfF : String,
    numOfM : String,
    status : String,
    notes : String
})

const Katzdb = mongoose.model('Katzdb', schema);
module.exports = Katzdb;