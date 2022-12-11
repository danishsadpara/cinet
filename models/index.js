//used for exports - middleware file.cont

const userModel = require('./users');
const adminModel= require('./admin') //HW
const clientModel= require('./client') //hw

module.exports ={
    userModel,
    adminModel, //hw
    clientModel //hw
}