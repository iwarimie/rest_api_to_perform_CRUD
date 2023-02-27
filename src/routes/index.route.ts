import express from 'express';
const router = express.Router()
import hotelRouter from './hotel.route'



router.use('/hotel',  hotelRouter)

export default router;