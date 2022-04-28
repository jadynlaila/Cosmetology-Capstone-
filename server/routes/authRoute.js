const { getUserAuth } = require('../controllers/auth')
const {auth} = require("../middleware/auth")
const router = require('express').Router()

router.route('/').get(auth, getUserAuth)

module.exports = router