import mongoose from 'mongoose';

const User = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    }
})


const UserModel = mongoose.model('User', User);
export default UserModel;