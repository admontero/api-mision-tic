const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// La ruta base sería api/usuarios

//Ver usuarios
router.get('/', userController.read);
//Ver un usuario
router.get('/:id', userController.read);

module.exports = router;