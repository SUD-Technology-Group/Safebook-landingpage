const express = require('express');
const router = express.Router();

const { bannerController, adminController } = require('../controllers');

const upload = require('../middlewares/upload');

// Path: [/admin]
router.get('/', adminController.getBanners);
router.post(
    '/banner/them',
    upload.fields([
        {
            name: 'banner',
            maxCount: 1,
        },
        {
            name: 'bannerBg',
            maxCount: 1,
        },
    ]),
    bannerController.create
);
router.post('/banner/xoa', bannerController.delete);
router.get('/banner/:id', bannerController.updateView);
router.post(
    '/banner/:id',
    upload.fields([
        {
            name: 'banner',
            maxCount: 1,
        },
        {
            name: 'bannerBg',
            maxCount: 1,
        },
    ]),
    bannerController.update
);

module.exports = router;
