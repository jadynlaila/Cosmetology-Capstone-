const router = require("express").Router();
const { getProfileTeacher, updateTeacher } = require("../controllers/profile");
const { getStylist, getTeacher } = require('../controllers/users');

router.route('/').get(getTeacher)
router.route('/stylists').get(getStylist);
router.route("/profile/:id").get(getProfileTeacher).put(updateTeacher)


module.exports = router;