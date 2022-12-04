const express = require('express');
const router = express.Router();

const { clientController } = require('../controllers');

// Path: [/]
router.get('/', clientController.index);
router.post('/lien-he', clientController.contact);

module.exports = router;
