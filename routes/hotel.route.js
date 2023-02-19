const userRole = require('../models/user.model')
//const {authorizeAdmin, authorizeGuest} = require('../middleware/test.middleware')
const router = require('express').Router()

const { createHotel, updateHotel, deleteHotel, fetchOneBook, fetchMany} = require('../controllers/hotel.controller')

router.post('/', createHotel)
router.patch('/:id', updateHotel)
router.delete('/:id', deleteHotel)
router.get('/:id', fetchOneBook)
router.get('/', fetchMany)

module.exports = router

