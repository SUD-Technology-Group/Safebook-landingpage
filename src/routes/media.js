const express = require('express');
const router = express.Router();

const { mediaController, adminController } = require('../controllers');

const upload = require('../middlewares/upload');

// Path: [/admin/bao-chi]
router.get('/', adminController.getMedia);
router.post('/them', upload.single('media'), mediaController.create);
router.post('/xoa', mediaController.delete);
router.get('/:id', mediaController.updateView);
router.post('/:id', upload.single('media'), mediaController.update);

module.exports = router;
