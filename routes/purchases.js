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
router.get('/', purchaseController.read);
//Ver ventas filtrados por id de venta
router.get('/?idVenta', purchaseController.read);
//Ver ventas filtrados por id de cliente
router.get('/?idCliente', purchaseController.read);
//Ver ventas filtrados por nombre de cliente
router.get('/?nameCliente', purchaseController.read);
//Ver una venta
router.get('/:id', purchaseController.read);

//Actualizar venta
router.patch('/:id',
    [
        check('date')
            .not()
            .isEmpty()
            .withMessage('La fecha es obligatoria')
            .isDate()
            .withMessage('La fecha debe ser válida'),
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
    purchaseController.update
);

module.exports = router;
