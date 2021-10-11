const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');
const { check } = require('express-validator');

// La ruta base sería api/ventas

//Crear venta
router.post('/',
    [
        check('_id', 'El identificador es obligatorio')
            .not()
            .isEmpty(),
        check('date')
            .not()
            .isEmpty()
            .withMessage('La fecha es obligatoria')
            .isDate()
            .withMessage('La fecha debe ser válida'),
        check('tax')
            .not()
            .isEmpty()
            .withMessage('El impuesto es obligatorio')
            .isNumeric()
            .withMessage('El impuesto debe ser numérico'),
        check('client_id')
            .not()
            .isEmpty()
            .withMessage('El ID del cliente es obligatorio')
            .isNumeric()
            .withMessage('El ID solo tiene números permitidos'),
        check('client_name', 'El nombre del cliente es obligatorio')
            .not()
            .isEmpty(),
    ],
    purchaseController.create
);

//Ver ventas

//Actualizar venta

//Eliminar venta

module.exports = router;