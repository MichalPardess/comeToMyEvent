const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        //unique: true
    },
    PhoneNumber : {
        type: String,
    }, 
    numOfF : String,
    numOfM : String,
    status : String,
    notes : String
})

const Cdb = mongoose.model('Cdb', schema);
module.exports = Cdb;