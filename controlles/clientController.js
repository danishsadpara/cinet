const {
    clientModel
} = require('../models');

const addClient = (body) => {
    const doc = new clientModel(body); //json file 
    const query = { _id: doc._id };
    return clientModel.findByIdAndUpdate(query, doc, {
        upsert: true,  //add new object everytime in db.
        new: true //latest data in response.
    });
};

const updateClient = (body) => {
    // const doc=new userModel(body); //json file 
    const query = { _id: body._id };
    return clientModel.findByIdAndUpdate(query, body, {
        //    upsert:true,  //add new object everytime in db. no need.
        new: true //latest data in response.
    });
};

//    deleteuser
const deleteClient = (filter) => {

    return clientModel.deleteOne(filter);
};
// get all users 
const getAllClients = (filter) => {

    return clientModel.find(filter);
};
// get single user 
const getClient = (filter) => {

    return clientModel.findOne(filter);
};



module.exports = {
    addClient,
    updateClient,
    deleteClient,
    getClient,
    getAllClients
}