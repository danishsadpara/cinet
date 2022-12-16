const {
    userModel
} = require('../models');

const addClient = (body) => {
    const doc = new userModel(body); //json file 
    const query = { _id: doc._id };
    return userModel.findByIdAndUpdate(query, doc, {
        upsert: true,  //add new object everytime in db.
        new: true //latest data in response.
    });
};

const updateClient = (body) => {
    // const doc=new userModel(body); //json file 
    const query = { _id: body._id };
    return userModel.findByIdAndUpdate(query, body, {
        //    upsert:true,  //add new object everytime in db. no need.
        new: true //latest data in response.
    });
};

//    deleteuser
const deleteClient = (filter) => {

    return userModel.deleteOne(filter);
};
// get all users 
const getAllClients = (filter) => {

    return userModel.find(filter);
};
// get single user 
const getClient = (filter) => {

    return userModel.findOne(filter);
};



module.exports = {
    addClient,
    updateClient,
    deleteClient,
    getClient,
    getAllClients
}