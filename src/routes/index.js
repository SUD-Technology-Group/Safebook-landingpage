const express = require('express');
const router = express.Router();

const clientRouter = require('./client');
const adminRouter = require('./admin');

router.use('/', clientRouter);
router.use('/admin', adminRouter);

module.exports = router;
