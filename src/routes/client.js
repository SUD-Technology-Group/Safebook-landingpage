const express = require('express');
const router = express.Router();

const { clientController } = require('../controllers');

router.get('/', clientController.index);

module.exports = router;
