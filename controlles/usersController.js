const {
    userModel
} = require('../models');

const addUser = (body) => {
    const doc = new userModel(body); //json file 
    const query = { _id: doc._id };
    return userModel.findOneAndUpdate(query, doc, {
        upsert: true,  //add new object everytime in db.
        new: true //latest data in response.

    }).populate('userType.item');
};

const updateUser = (body) => {
    // const doc=new userModel(body); //json file 
    const query = { _id: body._id };
    return userModel.findOneAndUpdate(query, body, {
        //    upsert:true,  //add new object everytime in db. no need.
        new: true //latest data in response.
    });
};

//    deleteuser
const deleteUser = (filter) => {

    return userModel.deleteOne(filter);
};
// get all users 
const getAllUsers = (filter) => {

    return userModel.find(filter);
};
// get single user 
const getUser = (filter) => {

    return userModel.findOne(filter).populate('userType.item');
};



module.exports = {
    addUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUser
}