const {
    adminModel
} = require('../models');

const addAdmin = (body) => {
    const doc = new adminModel(body); //json file 
    const query = { _id: doc._id }; //: ois like = value. -closure variable
    return adminModel.findByIdAndUpdate(query, doc, {
        upsert: true,  //add new object everytime in db.
        new: true //latest data in response.
    });
};

const updateAdmin = (body) => {
    // const doc=new userModel(body); //json file 
    const query = { _id: body._id };
    return adminModel.findByIdAndUpdate(query, body, {
        //    upsert:true,  //add new object everytime in db. no need.
        new: true //latest data in response.
    });
};

//    deleteuser
const deleteAdmin = (filter) => {

    return adminModel.deleteOne(filter);
};
// get all users 
const getAllAdmins = (filter) => {

    return adminModel.find(filter);
};
// get single user 
const getAdmin = (filter) => {

    return adminModel.findOne(filter);
};



module.exports = {
    addAdmin,
    updateAdmin,
    deleteAdmin,
    getAllAdmins,
    getAdmin
}