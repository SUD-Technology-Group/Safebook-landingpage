const catchAsync = require('../utils/catchAsync');

const clientController = {
	// GET /
	index: (req, res) => {
		res.render('client', { title: 'Trang chủ' });
	},
};

module.exports = clientController;
