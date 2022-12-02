const express = require('express');
const router = express.Router();

const classifyUser = require('../middlewares/classifyUser');

const authRouter = require('./auth');
const bannerRouter = require('./banner');
const sectionRouter = require('./section');
const staffRouter = require('./staff');
const commentRouter = require('./comment');

const { adminController } = require('../controllers');

// Path: [/admin]
router.use(classifyUser);
router.use('/', bannerRouter);
router.use('/section', sectionRouter);
router.use('/doi-ngu', staffRouter);
router.use('/binh-luan', commentRouter);
router.use('/auth', authRouter);

module.exports = router;
