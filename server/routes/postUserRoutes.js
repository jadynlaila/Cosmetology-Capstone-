const router = require("express").Router();
const { createStylist, createClient, createTeacher } = require('../controllers/users');

router.route('/stylist').post(createStylist);
router.route('/client').post(createClient);
router.route('/teacher').post(createTeacher)

module.exports = router;