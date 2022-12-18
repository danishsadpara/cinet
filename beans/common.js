const {
    userController,
    adminController,
    clientController,
    usersController
} = require('../controlles')

const singup = async (body) => {
    // apply validation
    if (!body.userName) {
        return Promise.reject({ error: "userName is required" });
    }
    if (!body.password) {
        return Promise.reject({ error: "password is required" });
    }
    if (!body.userType) {
        return Promise.reject({ error: "userType is required" });
    }
    if (!body.data) {
        return Promise.reject({ error: "data is required" });
    }
    try {
        let result = null;
        const userType = body.userType;

        switch (userType) {
            case 'admin':
                //homewrok -apply admin fields validation here
                result = await adminController.addAdmin(body.data);
                break;
            case 'client':
                //homewrok -apply admin fields validation here
                result = await clientController.addClient(body.data);
                break;
            default:
                return Promise.reject({ error: "userType is invalid" });
            
        }
// public to authentication attached .
   const userJson={
    userName: body.userName,
    password:body.password, // make this password ecrypted.
    userType:{
        kind: userType,
        item: result._id //now user is dynamic.
    }
   };
   const user = await usersController.addUser(userJson);
   return user;
//    email can also send from here.
    } catch (ex) {
        return Promise.reject({ error: ex });
    }

};

module.exports = {
    singup
}