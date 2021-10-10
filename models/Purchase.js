const mongoose = require('mongoose');

const PurchaseSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    tax: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    client_id: {
        type: Number,
        required: true,
    },
    client_name: {
        type: String,
        required: true,
    },
    client_email: {
        type: String
    },
    client_telephone: {
        type: Number,
    },
    products: [
        {
            product_id: {
                type: mongoose.Schema.Types.String,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('Purchase', PurchaseSchema);