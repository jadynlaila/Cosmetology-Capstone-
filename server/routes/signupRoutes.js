const router = require("express").Router();
const { createStylist, createClient, createTeacher, loginStylist } = require('../controllers/users');

router.route('/stylist').post(createStylist);
router.route('/teacher').post(createTeacher)
router.route('/login').post(loginStylist)


module.exports = router;