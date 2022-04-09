const router = require("express").Router();
const { getClients } = require('../controllers/clients');
const { createClient } = require("../controllers/users");

router.route('/').get(getClients).post(createClient);


module.exports = router;