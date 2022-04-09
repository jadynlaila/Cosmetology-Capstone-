const router = require("express").Router();
const {createVisit, clientCheckIn, clientCheckOut} = require('../controllers/visit')

router.route('/').post(createVisit).put(clientCheckIn)
router.route('/somethingelse').put(clientCheckOut)
//yes i'll fix that route name later, just needed another one cause i can't put two puts on the same route


module.exports = router;