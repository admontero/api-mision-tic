const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authController');
//const { check } = require('express-validator');

router.post(
    '/googlelogin', authController.googleLogin
);

module.exports = router;