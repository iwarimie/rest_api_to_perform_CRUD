import express from 'express';
import userRole from '../models/user.model';
// import router from 'express';
const router = express.Router()
import validate  from '../middleware/test.middleware';

import  hotelController from '../controllers/hotel.controller';
import router1 from './index.route';

router.post('/', validate, hotelController.createHotel)
router.patch('/:id', hotelController.updateHotel)
router.delete('/:id', hotelController.deleteHotel)
router.get('/:id', hotelController.fetchOneBook)
router.get('/', hotelController.fetchMany)

export default router

