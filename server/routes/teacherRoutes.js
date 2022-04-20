const router = require("express").Router();
const { getProfileTeacher, updateTeacher, deleteStylist } = require("../controllers/profile");
const { getStylist, getTeacher } = require('../controllers/users');

router.route('/').get(getTeacher)
router.route('/stylists').get(getStylist);
router.route("/profile/:id").get(getProfileTeacher).put(updateTeacher)
router.route('/:stylistId').delete(deleteStylist)


module.exports = router;