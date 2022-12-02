const express = require('express');
const router = express.Router();

const { staffController, adminController } = require('../controllers');

// Path: [/admin/staff]
router.get('/', adminController.getStaffs);
router.post('/create', staffController.create);
router.post('/update', staffController.update);
router.post('/delete', staffController.delete);

module.exports = router;
