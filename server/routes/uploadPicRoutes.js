
const {uploadProfilePic} = require("../controllers/uploadPic")
const router = require("express").Router()



router.route('/').post(uploadProfilePic)


module.exports = router