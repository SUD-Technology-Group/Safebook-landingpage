const catchAsync = require('../utils/catchAsync');
const customers = require('../../mock/customer');

const { sectionService } = require('../services');

const clientController = {
    // GET /
    index: catchAsync(async (req, res) => {
        const sections = await sectionService.get({});
        res.render('client', { title: 'Trang chủ', sections, customers });
    }),
};

module.exports = clientController;
