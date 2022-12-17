const express = require('express');
const router = express.Router(); //inner middleware - syntax for making router
const { clientController } = require('../controlles');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const query = req.query;
  console.log(query);
  try {
    const result = await clientController.getAllClients(query);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
}); 
router.post('/', async function (req, res, next) {
  const body = req.body;
  // console.log(query);
  try {
    const result = await clientController.addClient(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/', async function (req, res, next) {
  const body = req.body;
  if(!body._id){
    return res.status(400).send({message:"_id is required"});
  }
  // console.log(query);
  try {
    const result = await clientController.updateClient(body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', async function (req, res, next) {
  const id= req.params.id;
  // console.log(query);
  try {
    const filter = {_id:id }
    const result = await clientController.deleteClient(filter);
    res.status(200).send('Deleted successfully');
  } catch (error) {
    res.status(500).send(error);
  }
});
//router must have url mean slash- and have callback function.
// must have request, response. next mean execution from one middle ware to another middle ware.

module.exports = router;
