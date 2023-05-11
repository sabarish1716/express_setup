const express = require ('express')
const ind = require('./de')
const router = express.Router()

router.use('/subject',ind)

module.exports = router