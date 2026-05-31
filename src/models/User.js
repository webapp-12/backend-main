import mongoose from 'mongoose';

const userschema = new mongoose.schema(
    {
        fristname: {
            type: String,
            required: true,
        },

        Lastname: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },

        password: {
            type: String,
            required: true,
        },

        phone: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            required: true,
        },

        profileImage: {
            type: String,
            required: true,
        },

        isverified: {
            type: Boolean,
            default: false,
        },

        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active',
        }

        
    },

    {
        timestamps: true,       
    }

);

export default mongoose.model('User', userschema);