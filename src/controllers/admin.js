const catchAsync = require('../utils/catchAsync');
const { bannerService, sectionService, staffService, commentService } = require('../services');

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
    getSections: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const sections = await sectionService.get({});
        res.render('admin/section', {
            title: 'Section',
            layout: 'admin',
            sections,
            message,
        });
    }),

    // GET /admin/doi-ngu
    getStaffs: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const staffs = await staffService.get({});
        res.render('admin/staff', {
            title: 'Đội ngũ',
            layout: 'admin',
            staffs,
            message,
        });
    }),

    // GET /admin/binh-luan
    getComments: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const comments = await commentService.get({});
        res.render('admin/comment', {
            title: 'Bình luận',
            layout: 'admin',
            comments,
            message,
        });
    }),
};

module.exports = adminController;
