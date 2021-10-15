const {Router} = require('express');
const router = Router();
const productController = require('../controllers/productController');

// La ruta base sería api/productos

//Crear producto
router.route('/')
    .get(productController.getProducts)
    .post(productController.createProducts)
router.route('/:id')
    .get(productController.getProduct)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct)

//Actualizar producto

//Eliminar producto

module.exports = router;
