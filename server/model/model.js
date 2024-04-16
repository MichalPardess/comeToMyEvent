const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
   // email : {
   //     type: String,
   // },
    PhoneNumber : {
        type: String,
    }, 
    numOfM : String,

    numOfF : String,
    //numOfM : String,
    status : String,
    notes : String
})

const Participentsdb = mongoose.model('Participentsdb', schema);
module.exports = Participentsdb;
