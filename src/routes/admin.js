const express = require('express');
const router = express.Router();

const classifyUser = require('../middlewares/classifyUser');

const authRouter = require('./auth');

const { adminController } = require('../controllers');

router.use('/auth', authRouter);
router.use(classifyUser);
router.get('/', adminController.index);

module.exports = router;
