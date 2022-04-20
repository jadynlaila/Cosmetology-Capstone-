const router = require("express").Router();
const {createVisit, clientCheckIn, clientCheckOut, getActiveVisits, getUpcomingVisits} = require('../controllers/visit')

router.route('/').post(createVisit).put(clientCheckIn)
router.route('/somethingelse').put(clientCheckOut)
router.route('/active').get(getActiveVisits)
router.route('/upcoming').get(getUpcomingVisits)
//yes i'll fix that route name later, just needed another one cause i can't put two puts on the same route


module.exports = router;