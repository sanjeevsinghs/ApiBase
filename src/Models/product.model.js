const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product type is required'],
        },
        quantity: {
            type: Number,
            required: [true, 'Product quantity is required'],
            default: 0,
        },
        price: {
            type: Number,
            required: [true, 'Product price is required'],  
            default: 0,
        },
        image: {
            type: String,
            requires: false,
        },

    },
    {
        timestamps: true,
    }

)

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;