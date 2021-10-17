const {Router} = require('express');
const router = Router();
const productController = require('../controllers/productController');
const { check } = require('express-validator');

// La ruta base sería api/productos

//Crear producto
router.post('/',
    [
        check('_id', 'El identificador es obligatorio')
            .not()
            .isEmpty(),
        check('description', 'La descripción es requerida')
            .not()
            .isEmpty(),
        check('price')
            .not()
            .isEmpty()
            .withMessage('El precio es requerido')
            .isNumeric()
            .withMessage('El precio debe ser numérico'),
        check('status', 'Seleccionar el status del producto es obligatorio')
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
//Ver un producto
router.get('/:id', productController.read);

//Actualizar producto
router.patch('/:id',
    [
        check('description', 'La descripción es requerida')
            .not()
            .isEmpty(),
        check('price')
            .not()
            .isEmpty()
            .withMessage('El precio es requerido')
            .isNumeric()
            .withMessage('El precio debe ser numérico'),
        check('status', 'Seleccionar el status del producto es obligatorio')
            .not()
            .isEmpty(),
    ],
    productController.update
);

module.exports = router;