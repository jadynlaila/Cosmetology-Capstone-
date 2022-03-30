const router = require("express").Router();
const { getClients } = require('../controllers/clients');

router.route('/').get(getClients);

module.exports = router;