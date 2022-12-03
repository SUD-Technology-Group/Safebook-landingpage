const express = require('express');
const router = express.Router();

const { staffController, adminController } = require('../controllers');

const upload = require('../middlewares/upload');

// Path: [/admin/doi-ngu]
router.get('/', adminController.getStaffs);
router.post('/them', upload.single('staff'), staffController.create);
router.post('/xoa', staffController.delete);
router.get('/:id', staffController.updateView);
router.post('/:id', upload.single('staff'), staffController.update);

module.exports = router;
