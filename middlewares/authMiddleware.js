const {
    singup
} = require('../beans/common');
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
    userSignup
}