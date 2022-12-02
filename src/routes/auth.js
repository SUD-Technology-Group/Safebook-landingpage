const express = require('express');
const router = express.Router();

const { authController } = require('../controllers');

// Path: [/admin/auth]
router.get('/login', authController.loginView);
router.post('/login', authController.login);
router.post('/change-password', authController.changePassword, authController.logout);
router.get('/logout', authController.logout);

module.exports = router;
