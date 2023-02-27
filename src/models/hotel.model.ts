import mongoose from 'mongoose';
import IHotel from '../interphases/hotel.interphase';

const Hotel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: Array,
        required: true,
        trim: true,
        lowercase: true
    }
})

const HotelModel = mongoose.model('Hotel', Hotel);
export default HotelModel;