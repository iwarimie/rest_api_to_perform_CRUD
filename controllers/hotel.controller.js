const HotelService = require('../services/hotel.service');

class HotelController{
    //create hotel
    async createHotel(req, res){
        const reqBody = req.body
        console.log(reqBody)
//a. check if hotel is in db, if present say present
        const existingHotel = await HotelService.fetchOne({
            name: reqBody.name.toLowerCase()
        })
        if(existingHotel) res.status(403).json({
            success: false,
            message: 'Hotel already exist!'
        })
//b. if it is not in db, then create it
const newHotel = await HotelService.create(reqBody)

res.status(201).json({
    success: true,
    message: 'Hotel has been created!',
    data: newHotel
})


    }
    
//update hotel
async updateHotel(req, res){
    const hotelId = req.params.id
    const updateData = req.body 
    //fetch the hotel you want to edit & check if it is in the db: if it exist ok ? throw error
const existingHotel = await HotelService.fetchOne({
    _id: hotelId
})
if(!existingHotel) return res.status(404).json({
    success: false,
    message: 'Hotel to edit do not exist'
})
    //check if the name already exist in db, if name already exist : throw error : success
    if(updateData.name){
        const existingHotelWithUpdateName = await HotelService.fetchOne({
            name: updateData.name.toLowerCase()
        })

        if(existingHotelWithUpdateName._id.toString() !== existingHotel._id.toString()){
            return res.status(403).json({
                success: false,
                message: 'Hotel with update name already exist'
            })
        }
    }
    const updatedData = await HotelService.update(hotelId, updateData)
    return res.status(200).json({
        success: true,
        message: 'Hotel has been updated!',
        data: updatedData
    })
}
    
//delete hotel
    async deleteHotel(req, res){
        const hotelId = req.params.id
        // const updateData = req.body 
        //fetch the hotel you want to delete & check if it is in the db: if it exist ok ? throw error
    const existingHotel = await HotelService.fetchOne({
        _id: hotelId
    })
    if(!existingHotel)res.status(404).json({
        success: false,
        message: 'Hotel to delete do not exist'
    })

    const deletedHotel = await HotelService.delete(hotelId)

    res.status(200).json({
        success: true,
        message: 'Hotel has been deleted!',
        data: deletedHotel
    })
    }
    
    
    
    //fetch a single hotel
    async fetchOneBook(req, res){
        const hotelId = req.params.id
        //fetch the hotel using id & check if it is in the db: if it exist ok ? throw error
    const existingHotel = await HotelService.fetchOne({
        _id: hotelId
    })
    if(!existingHotel)res.status(404).json({
        success: false,
        message: 'Hotel to fetch do not exist'
    })

    res.status(200).json({
        success: true,
        message: 'Hotel fetched successfully!',
        data: existingHotel
    })
    }
    //fetch all hotel
    async fetchMany(req, res){
        const fetchedHotels = await HotelService.fetch({})

        res.status(200).json({
            success: true,
            message: 'Hotels fetched successfully!',
            data: fetchedHotels
        })        
    }
}

module.exports = new HotelController();