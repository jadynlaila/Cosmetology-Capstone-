const { getUserAuth } = require("../controllers/auth");
const { authMiddleware } = require("../middleware/auth");
const router = require("express").Router();

router.route("/").get(getUserAuth, authMiddleware);

module.exports = router;
