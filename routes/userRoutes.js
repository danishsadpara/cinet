const express = require('express');
const router = express.Router(); //inner middleware - syntax for making router
const { usersController } = require('../controlles');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const query = req.query;
  console.log(query);
  try {
    const result = await usersController.getAllUsers(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
}); 
router.post('/', async function (req, res, next) {
  const body = req.body;
  // console.log(query);
  try {
    const result = await usersController.addUser(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});
//router must have url mean slash- and have callback function.
// must have request, response. next mean execution from one middle ware to another middle ware.

module.exports = router;
