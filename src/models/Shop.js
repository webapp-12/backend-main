import mongooose from "mongoose";

const shopschema = new mongoose.shopschema(

    {
        owner:{

            type: mongoose.schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        shopName: {
            type: string,
            required: true,
        },

        shopPhone: {
            type: string,
            required: true,
        },

        shopEmail: {
            type: string,
        },

        address: {
            line1: string,
            line2: string,
            city: string,
            district: String,
            province: String,
        },

        logo: string,
        banner: string,

        status: {
            type: string,
            enum: ['pending', 'approved','rejected','blocked'],
            default: 'pending'
        },

        isverified: {
            type: boolean,
            default: false,
        },
    },    
        {
            timestamps: true,
        }
    
);

export default mongoose.model('shop',shopschema);