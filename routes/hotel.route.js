const userRole = require('../models/user.model')
const router = require('express').Router()
const {  validate } = require('../middleware/test.middleware')

const { createHotel, updateHotel, deleteHotel, fetchOneBook, fetchMany} = require('../controllers/hotel.controller')

router.post('/', validate, createHotel)
router.patch('/:id', updateHotel)
router.delete('/:id', deleteHotel)
router.get('/:id', fetchOneBook)
router.get('/', fetchMany)

module.exports = router

