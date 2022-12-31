const mongoose = require('mongoose'); //hardcoded
const bcrypt = require('bcryptjs');
const usersSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        kind: { type: String, enum: ['admin', 'client'] }, //role defined
        item: { type: mongoose.Types.ObjectId, refPath: 'userType.kind' }  //actuall profile of the user.
    }
},
    {
        collection: 'users'  //model ka synonym
    }
); //schema definition -it creeates mongose schema-we create json keys

// password enryption
usersSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10) //
});
module.exports = mongoose.model('users', usersSchema); //map models to schema.