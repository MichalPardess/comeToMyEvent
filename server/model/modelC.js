const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fName : {
        type : String,
        required: true
    },
    lName : {
        type : String
        
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

const Cdb = mongoose.model('Cdb', schema);
module.exports = Cdb;