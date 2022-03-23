const router = require("express").Router();
const {createStylist, createClient} = require('../controllers/users');

router.route('/').post(createStylist);
router.route('/client').post(createClient);

module.exports = router;