const Purchase = require('../models/Purchase');
const { validationResult } = require('express-validator');

exports.create = async (req, res) => {

    //Revisamos si hay errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Aplicamos destructuring al objeto
    const { _id } = req.body;

    //Validamos que el purchase_id sea único
    let purchaseExists = await Purchase.findOne({ _id });
    if (purchaseExists) {
        return res.status(400).json({ msg: 'El ID de la venta debe ser único' });
    }

    try {
        //Instanciamos una nueva venta a partir del cuerpo de la petición
        //y que cumpla con lo que se estipula en el modelo Venta
        const purchase = new Purchase(req.body);

        //Guardamos en la base de datos
        purchase.save();

        //Devolvemos la respuesta
        res.json(purchase);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }
};