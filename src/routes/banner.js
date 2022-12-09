const express = require('express');
const router = express.Router();

const { bannerController, adminController } = require('../controllers');

const upload = require('../middlewares/upload');

// Path: [/admin]
router.get('/', adminController.getBanner);
router.post(
    '/banner/:id',
    upload.array('banner', 12),
    bannerController.update
);

module.exports = router;
