
const { singup } = require('../beans/common');
const { usersController } = require('../controlles');
const { sign, verify } = require('jsonwebtoken');
// const { usersController } = require('../controlles');
const executeLogin = async (username, password, cb) => { //saturday after wekend viccations.
    try {
        const filter = { userName: username, password: password };
        const user = await usersController.getUser(filter);
        if (!user) {
            return cb(null, false);
        }

        return cb(null, user);
    } catch (error) {
        return cb(error, false);
    }
};

const generateToken = async (req, res, next) => {

    const user = req.user;
    const json = {
        _id: user._id
    };
    const token = sign({ user: json }, 'someSecretvalue');
    req.token = token;
    next();
};
const respond = async (req, res, next) => {

    const user = req.user;
    // const token = req.token;
    const result = { token: req.token, user: user.userType.item };
    res.status(200).send(result);

}

const userSignup = async (req, res, next) => {
    const body = req.body;
    try {
        const result = await singup(body);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send(error);   // beause it used for validation erroes
    }
};
module.exports = {
    userSignup,
    executeLogin,
    generateToken,
    respond,
}
