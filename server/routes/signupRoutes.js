const router = require("express").Router()
const { createStylist, createTeacher, loginStylist, pinResend, getUserByPin, getUserByEmail } = require('../controllers/users');

router.route('/stylist').post(createStylist);
router.route('/teacher').post(createTeacher)
router.route('/login').post(loginStylist).get(pinResend)
router.route('/getUserByPin').post(getUserByPin);
router.route('/getUserByEmail').post(getUserByEmail)


module.exports = router;