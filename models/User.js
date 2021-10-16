const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['pendiente', 'autorizado', 'no autorizado']
    }
});

module.exports = mongoose.model('User', UserSchema);