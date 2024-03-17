const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    //email : {
     //   type: String,
        //unique: true
    //},
    PhoneNumber : {
        type: String,
    }, 
    numOfF : String,
    numOfM : String,
    numOfC : String,
    status : String,
    notes : String
})

const Bdb = mongoose.model('Bdb', schema);
module.exports = Bdb;