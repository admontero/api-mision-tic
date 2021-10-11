const Product = require('../models/Product');
const { validationResult } = require('express-validator');

exports.create = async (req, res) => {

    //Revisamos si hay errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Aplicamos destructuring al objeto
    const { _id, price, stock } = req.body;

    //Validamos que el product_id sea único
    let productExists = await Product.findOne({ _id });
    if (productExists) {
        return res.status(400).json({ msg: 'El ID del producto debe ser único' });
    }

    if (price < 0 || stock < 0) {
        return res.status(400).json({ msg: 'El precio y stock del producto deben ser mayor o igual 0' });
    }
    
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
        res.status(500).send('Error desde el servidor');
    }
};

exports.read = async (req, res) => {
    try {
        const id = req.query.id;
        const description = req.query.description;
        const products = await Product.find({});

        //Cuando el usuario busque por id
        if (id) {
            const productsFiltered = products.filter(product => product._id.toLowerCase().includes(id.toLowerCase()));
            return res.send({
                status: 'OK',
                count: productsFiltered.length,
                products: productsFiltered
            });
        }

        //Cuando el usuario busque por descripción
        if (description) {
            const productsFiltered = products.filter(product => product.description.toLowerCase().includes(description.toLowerCase()));
            return res.send({
                status: 'OK',
                count: productsFiltered.length,
                products: productsFiltered
            });
        }

        //Retorna todos los productos
        return res.send({
            status: 'OK',
            count: products.length,
            products: products 
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error desde el servidor');
    }
};