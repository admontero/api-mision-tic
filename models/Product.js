const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Product', ProductSchema);