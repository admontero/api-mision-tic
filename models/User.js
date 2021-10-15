const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id:{
        type:String,
        required: true,
    },
    
    
    name: {
        type: String,
        required: true,
        trim: true
    },
   
    role : {
        type: String,
        default: "Vendedor"
    },

    email : {
        type: String,
        required: true
    },

    user : {
        type: String,
        required: true
    },

    password : {
        type: String,
        required: true
    },

    state : {
        type: String,
        default:"Activo"
    }
});

module.exports = mongoose.model('User', UserSchema);