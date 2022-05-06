const router = require("express").Router();
const { sendPinEmail } = require("../controllers/email");

router.route('/').post(sendPinEmail);

module.exports = router;