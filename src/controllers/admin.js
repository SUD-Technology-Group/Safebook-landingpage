const catchAsync = require('../utils/catchAsync');
const { bannerService } = require('../services');

const adminController = {
    // GET /admin/
    getBanners: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const banners = await bannerService.get({});
        res.render('admin/banner', {
            title: 'Banner',
            layout: 'admin',
            banners,
            message,
        });
    }),

    // GET /admin/section
    getSections: (req, res) => {
        res.render('admin/section', { title: 'Section', layout: 'admin' });
    },

    // GET /admin/staff
    getStaffs: (req, res) => {
        res.render('admin/staff', { title: 'Đội ngũ', layout: 'admin' });
    },

    // GET /admin/comment
    getComments: (req, res) => {
        res.render('admin/comment', { title: 'Bình luận', layout: 'admin' });
    },
};

module.exports = adminController;
