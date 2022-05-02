import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: 'String',
        required: true,
        trim: true
    },

    password: {
        type: 'String',
        required: true,
        unique: true
    },

    email: {
        type: 'String',
        required: true,
        trim: true
    }
}, {timestamps: true});

const UserModel = mongoose.model('user', userSchema);
export default UserModel;