const catchAsync = require('../utils/catchAsync');
const fs = require('fs');

const { bannerService } = require('../services');

const bannerController = {
    // POST /admin/banner/them
    create: catchAsync(async (req, res) => {
        let image = '';
        let backgroundImage = '';
        if (req.files.banner)
            image = '/uploads/banner/' + req.files.banner[0].filename;
        if (req.files.bannerBg)
            backgroundImage =
                '/uploads/bannerBg/' + req.files.bannerBg[0].filename;

        await bannerService
            .create({ content: req.body.content, image, backgroundImage })
            .catch((err) => {
                req.flash('error', 'Thêm banner thất bại');
                return res.redirect('back');
            });

        req.flash('success', 'Thêm banner thành công');
        res.redirect('back');
    }),

    // GET /admin/banner/:id
    updateView: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const banner = await bannerService.getOne(
            { _id: req.params.id },
            '-_id -__v'
        );
        res.render('admin/banner/update', {
            title: 'Chỉnh sửa banner',
            layout: 'admin',
            banner,
            message,
        });
    }),

    // POST /admin/banner/:id
    update: catchAsync(async (req, res) => {
        const { bannerInp, bannerBgInp } = req.body;
        let { image, backgroundImage } = await bannerService.getOne(
            {
                _id: req.params.id,
            },
            'image backgroundImage'
        );

        if (req.files.banner) {
            if (image) {
                fs.unlink(`public/${image}`, (err) => {
                    if (err) {
                        req.flash('error', 'Cập nhật banner thất bại');
                        return res.redirect('back');
                    }
                });
            }
            image = '/uploads/banner/' + req.files.banner[0].filename;
        } else if (!bannerInp && image) {
            fs.unlink(`public/${image}`, (err) => {
                if (err) {
                    req.flash('error', 'Cập nhật banner thất bại');
                    return res.redirect('back');
                }
            });
            image = '';
        }

        if (req.files.bannerBg) {
            if (backgroundImage) {
                fs.unlink(`public/${backgroundImage}`, (err) => {
                    if (err) {
                        req.flash('error', 'Cập nhật banner thất bại');
                        return res.redirect('back');
                    }
                });
            }
            backgroundImage =
                '/uploads/bannerBg/' + req.files.bannerBg[0].filename;
        } else if (!bannerBgInp && backgroundImage) {
            fs.unlink(`public/${backgroundImage}`, (err) => {
                if (err) {
                    req.flash('error', 'Cập nhật banner thất bại');
                    return res.redirect('back');
                }
            });
            backgroundImage = '';
        }

        await bannerService
            .update(
                { _id: req.params.id },
                { ...req.body, image, backgroundImage }
            )
            .catch((err) => {
                console.log(err);
                req.flash('error', 'Cập nhật banner thất bại');
                return res.redirect('back');
            });

        req.flash('success', 'Cập nhật banner thành công');
        res.redirect('/admin');
    }),

    // POST /admin/banner/xoa
    delete: catchAsync(async (req, res) => {
        const { image, backgroundImage } = await bannerService.getOne(
            {
                _id: req.body._id,
            },
            'image backgroundImage'
        );

        if (image) {
            fs.unlink(`public/${image}`, (err) => {
                if (err) {
                    req.flash('error', 'Xoá banner thất bại');
                    return res.redirect('back');
                }
            });
        }

        if (backgroundImage) {
            fs.unlink(`public/${backgroundImage}`, (err) => {
                if (err) {
                    req.flash('error', 'Xoá banner thất bại');
                    return res.redirect('back');
                }
            });
        }

        await bannerService.delete({ _id: req.body._id }).catch((err) => {
            req.flash('error', 'Xoá banner thất bại');
            return res.redirect('back');
        });

        req.flash('success', 'Xoá banner thành công');
        res.redirect('back');
    }),
};

module.exports = bannerController;
