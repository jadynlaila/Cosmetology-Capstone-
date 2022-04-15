const router = require("express").Router();
const { getProfileTeacher, updateTeacher } = require("../controllers/profile");
const { getStylist } = require('../controllers/users');

router.route('/stylists').get(getStylist);
router.route("/profile/:id").get(getProfileTeacher).put(updateTeacher)


module.exports = router;