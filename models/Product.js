const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    _id:{
        type:String,
        required: true,
    },
    
    
    name: {
        type: String,
        required: true,
        trim: true
    },
   
    stock: {
        type: String,
        default: "0"
    },

    brand: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);