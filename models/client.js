//HW
const mongoose = require('mongoose'); //hardcoded
const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    age: {
        type: String,
        required: true
    },
  
},
    {
        collection: 'client'  //model ka synonym
    }
); //schema definition -it creeates mongose schema-we create json keys
module.exports = mongoose.model('client', clientSchema); //map models to schema.