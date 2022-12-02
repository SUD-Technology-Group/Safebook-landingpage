const catchAsync = require('../utils/catchAsync');

const adminController = {
	// GET /
	index: (req, res) => {
		res.render('admin', { title: 'Quản trị' });
	},
};

module.exports = adminController;
