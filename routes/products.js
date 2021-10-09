const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// La ruta base sería api/productos

//Crear producto
router.post('/', productController.create);

//Ver productos

//Actualizar producto

//Eliminar producto

module.exports = router;
