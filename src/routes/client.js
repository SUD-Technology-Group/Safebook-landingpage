const express = require('express');
const router = express.Router();

const { clientController } = require('../controllers');

// Path: [/]
router.get('/', clientController.index);
router.get('/dang-ky-dung-thu', clientController.getTrialForm);
router.get('/thank-you', clientController.getThankYouPage);
router.post('/dang-ky-dung-thu', clientController.postTrialForm);
router.post('/lien-he', clientController.contact);

module.exports = router;
