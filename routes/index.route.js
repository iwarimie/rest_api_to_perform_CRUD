const router = require('express').Router()
const hotelRouter = require('./hotel.route')



router.use('/hotel',  hotelRouter)

module.exports = router