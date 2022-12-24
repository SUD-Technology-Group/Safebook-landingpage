const express = require('express');
const router = express.Router();

const { clientController } = require('../controllers');

// Path: [/]
router.get('/', clientController.index);
router.get('/dang-ky-dung-thu', clientController.getTrialForm);
router.post('/dang-ky-dung-thu', clientController.postTrialForm);
router.get('/loi-cam-on', clientController.getThankYouPage);
router.post('/lien-he', clientController.contact);

module.exports = router;
