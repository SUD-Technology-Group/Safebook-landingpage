const catchAsync = require('../utils/catchAsync');
const customers = require('../../mock/customer');

const { sectionService, bannerService, commentService, staffService } = require('../services');

const clientController = {
  // GET /
  index: catchAsync(async (req, res) => {
    const sections = await sectionService.get({});
    const banners = await bannerService.get({});
    const comments = await commentService.get({});
    const staffs = await staffService.get({});
    console.log(banners);
    res.render('client', {
      title: 'Trang chủ',
      sections,
      customers,
      comments,
      banners,
      staffs,
    });
  }),
};

module.exports = clientController;
