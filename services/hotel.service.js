const HotelModel = require('../models/hotel.model');




class HotelService{
    //create hotel
    async create(hotelData){
        return await HotelModel.create(hotelData)
    }
    //edit a hotel
    async update(id, hotelUpdate){
        return await HotelModel.findByIdAndUpdate(id, hotelUpdate, {
            new: true
        })
    }
    //delete a hotel
    async delete(id){
        return await HotelModel.findByIdAndDelete(id)
    }
    //get a single hotel
    async fetchOne(filter){
        return await HotelModel.findOne(filter)
    }
    //get all hotels
    async fetch(filter){
        return await HotelModel.find(filter)
    }
}

module.exports = new HotelService();