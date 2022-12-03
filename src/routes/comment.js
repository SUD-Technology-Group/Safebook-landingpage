const express = require('express');
const router = express.Router();

const { commentController, adminController } = require('../controllers');

const upload = require('../middlewares/upload');

// Path: [/admin/binh-luan]
router.get('/', adminController.getComments);
router.post('/them', upload.single('comment'), commentController.create);
router.post('/xoa', commentController.delete);
router.get('/:id', commentController.updateView);
router.post('/:id', upload.single('comment'), commentController.update);

module.exports = router;
