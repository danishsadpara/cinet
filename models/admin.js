//HW
const mongoose = require('mongoose'); //hardcoded
const adminSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob:{
        type:Date,
        required: true
    }
  
},
    {
        collection: 'admin'  //model ka synonym
    }
); //schema definition -it creeates mongose schema-we create json keys
module.exports = mongoose.model('admin', adminSchema); //map models to schema.