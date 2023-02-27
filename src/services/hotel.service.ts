import HotelModel from '../models/hotel.model';
import IHotel from '../interphases/hotel.interphase';


class HotelService{
    //create hotel
    async create(hotelData: IHotel){
        return await HotelModel.create(hotelData)
    }
    //edit a hotel
    async update(id: string, hotelUpdate: Partial<IHotel>){
        return await HotelModel.findByIdAndUpdate(id, hotelUpdate, {
            new: true
        })
    }
    //delete a hotel
    async delete(id: string){
        return await HotelModel.findByIdAndDelete(id)
    }
    //get a single hotel
    async fetchOne(filter: Partial<IHotel> & {_id?: string}){
        return await HotelModel.findOne(filter)
    }
    //get all hotels
    async fetch(filter: Partial<IHotel>){
        return await HotelModel.find(filter)
    }
}

export default new HotelService();