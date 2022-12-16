const catchAsync = require('../utils/catchAsync');
const {
    bannerService,
    sectionService,
    staffService,
    commentService,
    featureService,
    mediaService,
} = require('../services');

const adminController = {
    // GET /admin/
    getBanner: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const banner = (await bannerService.get({}))[0];
        console.log(banner);
        res.render('admin/banner', {
            title: 'Banner',
            layout: 'admin',
            banner,
            message,
        });
    }),

    // GET /admin/section
    getSections: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const sections = await sectionService.get({}, '-description');
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

    // GET /admin/tinh-nang
    getFeatures: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const features = await featureService.get({});
        res.render('admin/feature', {
            title: 'Tính năng',
            layout: 'admin',
            features,
            message,
        });
    }),

    // GET /admin/bao-chi
    getMedia: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const media = await mediaService.get({});
        res.render('admin/media', {
            title: 'Báo chí',
            layout: 'admin',
            media,
            message,
        });
    }),
};

module.exports = adminController;
