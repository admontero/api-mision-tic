const Product = require('../models/Product');

exports.create = async (req, res) => {
    try {
        //Instanciamos un nuevo producto a partir del cuerpo de la petición
        //y que cumpla con lo que se estipula en el modelo Product
        const product = new Product(req.body);

        //Guardamos en la base de datos
        product.save();

        //Devolvemos la respuesta
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error del servidor');
    }
};