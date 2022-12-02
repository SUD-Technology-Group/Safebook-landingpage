const express = require('express');
const router = express.Router();

const { bannerController, adminController } = require('../controllers');

const upload = require('../middlewares/upload');

// Path: [/admin]
router.get('/', adminController.getBanners);
router.post('/banner/create', upload.single('banner'), bannerController.create);
router.post('/banner/update', upload.single('banner'), bannerController.update);
router.post('/banner/delete', bannerController.delete);

module.exports = router;
