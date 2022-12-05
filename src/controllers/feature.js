const catchAsync = require('../utils/catchAsync');
const fs = require('fs');

const { featureService } = require('../services');

const featureController = {
    // POST /admin/tinh-nang/them
    create: catchAsync(async (req, res) => {
        const image = req.file ? '/uploads/feature/' + req.file.filename : '';

        await featureService.create({ ...req.body, image }).catch((err) => {
            req.flash('error', 'Thêm tính năng thất bại');
            return res.redirect('back');
        });

        req.flash('success', 'Thêm tính năng thành công');
        res.redirect('back');
    }),

    // GET /admin/tinh-nang/:id
    updateView: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const feature = await featureService.getOne({ _id: req.params.id }, '-_id -__v');
        res.render('admin/feature/update', {
            title: 'Chỉnh sửa tính năng',
            layout: 'admin',
            feature,
            message,
        });
    }),

    // POST /admin/tinh-nang/:id
    update: catchAsync(async (req, res) => {
        const { imageInp } = req.body;
        let { image } = await featureService.getOne({ _id: req.params.id }, 'image');

        if (req.file) {
            if (image) {
                fs.unlink(`public/${image}`, (err) => {
                    if (err) {
                        req.flash('error', 'Cập nhật tính năng thất bại');
                        return res.redirect('back');
                    }
                });
            }
            image = '/uploads/feature/' + req.file.filename;
        } else if (!imageInp && image) {
            fs.unlink(`public/${image}`, (err) => {
                if (err) {
                    req.flash('error', 'Cập nhật tính năng thất bại');
                    return res.redirect('back');
                }
            });
            image = '';
        }

        await featureService
            .update({ _id: req.params.id }, { ...req.body, image })
            .catch((err) => {
                req.flash('error', 'Cập nhật tính năng thất bại');
                return res.redirect('back');
            });

        req.flash('success', 'Cập nhật tính năng thành công');
        res.redirect('/admin/tinh-nang');
    }),

    // POST /admin/tinh-nang/xoa
    delete: catchAsync(async (req, res) => {
        const { image } = await featureService.getOne({ _id: req.body._id }, 'image');

        if (image) {
            fs.unlink(`public/${image}`, (err) => {
                if (err) {
                    req.flash('error', 'Xoá tính năng thất bại');
                    return res.redirect('back');
                }
            });
        }

        await featureService.delete({ _id: req.body._id }).catch((err) => {
            req.flash('error', 'Xoá tính năng thất bại');
            return res.redirect('back');
        });

        req.flash('success', 'Xoá tính năng thành công');
        res.redirect('back');
    }),
};

module.exports = featureController;
