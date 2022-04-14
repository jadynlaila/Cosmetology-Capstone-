const { searchClient } = require("../controllers/searchComp")

const router = require("express").Router()

router.route('/:searchText').get(searchClient)

module.exports = router