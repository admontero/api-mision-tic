const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post(
    '/googlelogin', authController.googleLogin
);

//Devolver usuario autenticado
router.get('/auth', 
    auth,
    authController.userAuthenticated
);

module.exports = router;