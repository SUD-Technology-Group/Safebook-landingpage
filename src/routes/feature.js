const express = require('express');
const router = express.Router();

const { featureController, adminController } = require('../controllers');

const upload = require('../middlewares/upload');

// Path: [/admin/tinh-nang]
router.get('/', adminController.getFeatures);
router.post('/them', upload.single('feature'), featureController.create);
router.post('/xoa', featureController.delete);
router.get('/:id', featureController.updateView);
router.post('/:id', upload.single('feature'), featureController.update);

module.exports = router;
