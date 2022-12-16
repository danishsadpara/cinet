const {
    userModel
} = require('../models');

const addAdmin = (body) => {
    const doc = new userModel(body); //json file 
    const query = { _id: doc._id };
    return userModel.findByIdAndUpdate(query, doc, {
        upsert: true,  //add new object everytime in db.
        new: true //latest data in response.
    });
};

const updateAdmin = (body) => {
    // const doc=new userModel(body); //json file 
    const query = { _id: body._id };
    return userModel.findByIdAndUpdate(query, body, {
        //    upsert:true,  //add new object everytime in db. no need.
        new: true //latest data in response.
    });
};

//    deleteuser
const deleteAdmin = (filter) => {

    return userModel.deleteOne(filter);
};
// get all users 
const getAllAdmins = (filter) => {

    return userModel.find(filter);
};
// get single user 
const getAdmin = (filter) => {

    return userModel.findOne(filter);
};



module.exports = {
    addAdmin,
    updateAdmin,
    deleteAdmin,
    getAllAdmins,
    getAdmin
}