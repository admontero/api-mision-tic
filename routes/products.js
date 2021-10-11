const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { check } = require('express-validator');

// La ruta base sería api/productos

//Crear producto
router.post('/',
    [
        check('_id', 'El identificador es obligatorio')
            .not()
            .isEmpty(),
        check('name', 'El nombre es obligatorio')
            .not()
            .isEmpty(),
        check('brand', 'La marca es requerida')
            .not()
            .isEmpty(),
        check('description', 'La descripción es requerida')
            .not()
            .isEmpty(),
        check('stock')
            .not()
            .isEmpty()
            .withMessage('La cantidad es obligatoria')
            .isNumeric()
            .withMessage('La cantidad debe ser numérica'),
        check('price')
            .not()
            .isEmpty()
            .withMessage('El precio es requerido')
            .isNumeric()
            .withMessage('El precio debe ser numérico'),
        check('iva', 'Seleccionar si el producto cuenta con iva es obligatorio')
            .not()
            .isEmpty(),
    ],
    productController.create
);

//Ver productos
router.get('/', productController.read);
//Ver productos filtrados por id
router.get('/?id', productController.read);
//Ver productos filtrados por descripción
router.get('/?description', productController.read);

//Actualizar producto

//Eliminar producto

module.exports = router;
