const router = require("express").Router();
const { getClients, checkIn, checkOut} = require('../controllers/clients');
const { createClient } = require("../controllers/users");

router.route('/').get(getClients).post(createClient);
router.route('/checkOut').put(checkOut);
router.route('/checkIn').put(checkIn);


module.exports = router;