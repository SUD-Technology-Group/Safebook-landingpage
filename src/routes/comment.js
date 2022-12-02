const express = require('express');
const router = express.Router();

const { commentController, adminController } = require('../controllers');

// Path: [/admin/comment]
router.get('/', adminController.getComments);
router.post('/create', commentController.create);
router.post('/update', commentController.update);
router.post('/delete', commentController.delete);

module.exports = router;
