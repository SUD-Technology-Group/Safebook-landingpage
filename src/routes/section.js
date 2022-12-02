const express = require('express');
const router = express.Router();

const { sectionController, adminController } = require('../controllers');

// Path: [/admin/section]
router.get('/', adminController.getSections);
router.post('/create', sectionController.create);
router.post('/update', sectionController.update);
router.post('/delete', sectionController.delete);

module.exports = router;
