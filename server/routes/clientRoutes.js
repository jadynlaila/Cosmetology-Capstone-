const router = require("express").Router();
const { getClients, checkIn, checkOut, deleteClient} = require('../controllers/clients');
const { createClient } = require("../controllers/users");

router.route('/').get(getClients).post(createClient);
router.route('/checkOut').put(checkOut);
router.route('/checkIn').put(checkIn);
router.route('/:clientId').delete(deleteClient)


module.exports = router;