const router = require("express").Router();
const { getProfileTeacher, updateTeacher } = require("../controllers/profile");
const { } = require('../controllers/users');

router.route('/').get();
router.route("/profile/:id").get(getProfileTeacher).put(updateTeacher)


module.exports = router;