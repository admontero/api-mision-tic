const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');

// La ruta base sería api/usuarios

//Ver usuarios
router.get('/', userController.read);
//Ver un usuario
router.get('/:id', userController.read);

//Actualizar usuario
router.patch('/:id',
    [
        check('role', 'El rol del usuario es obligatorio')
            .not()
            .isEmpty(),
        check('status', 'El estado del usuario es obligatorio')
            .not()
            .isEmpty(),
    ],
    userController.update
);

module.exports = router;