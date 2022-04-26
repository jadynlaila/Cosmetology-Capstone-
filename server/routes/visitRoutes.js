const router = require("express").Router();
const {createVisit, checkIn, checkOut, getActiveVisits, getUpcomingVisits} = require('../controllers/visit')

router.route('/').post(createVisit)
router.route("/checkIn").put(checkIn)
router.route('/checkOut').put(checkOut)
router.route('/active').get(getActiveVisits)
router.route('/upcoming').get(getUpcomingVisits)


module.exports = router;