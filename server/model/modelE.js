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
    status : String,
    notes : String
})

const Edb = mongoose.model('Edb', schema);
module.exports = Edb;