const express = require('express');
const router = express.Router();

const { sectionController, adminController } = require('../controllers');

const upload = require('../middlewares/upload');

// Path: [/admin/section]
router.get('/', adminController.getSections);
router.get('/:id', sectionController.updateView);
router.post('/:id', upload.single('section'), sectionController.update);

module.exports = router;
