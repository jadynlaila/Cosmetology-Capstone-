const router = require("express").Router()
const { createStylist, createTeacher, loginStylist, pinResend } = require('../controllers/users');

router.route('/stylist').post(createStylist);
router.route('/teacher').post(createTeacher)
router.route('/login').post(loginStylist).get(pinResend)


module.exports = router;