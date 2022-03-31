const router = require("express").Router();
const { createStylist, createClient, createTeacher, loginStylist } = require('../controllers/users');

router.route('/signup').post(createStylist);
router.route('/').post(createClient);
router.route('/tsignup').post(createTeacher)
router.route('/login').post(loginStylist)

module.exports = router;