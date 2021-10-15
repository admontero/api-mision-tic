const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.4noaq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error)
        process.exit(1); //Detener la app
    }
}

module.exports = connectDB;