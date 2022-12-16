const catchAsync = require('../utils/catchAsync');
const fs = require('fs');

const { mediaService } = require('../services');

const mediaController = {
    // POST /admin/bao-chi/them
    create: catchAsync(async (req, res) => {
        const image = req.file ? '/uploads/media/' + req.file.filename : '';

        await mediaService.create({ ...req.body, image }).catch((err) => {
            req.flash('error', 'Thêm báo chí thất bại');
            return res.redirect('back');
        });

        req.flash('success', 'Thêm báo chí thành công');
        res.redirect('back');
    }),

    // GET /admin/bao-chi/:id
    updateView: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const media = await mediaService.getOne({ _id: req.params.id }, '-_id -__v');
        res.render('admin/media/update', {
            title: 'Chỉnh sửa báo chí',
            layout: 'admin',
            media,
            message,
        });
    }),

    // POST /admin/bao-chi/:id
    update: catchAsync(async (req, res) => {
        const { imageInp } = req.body;
        let { image } = await mediaService.getOne({ _id: req.params.id }, 'image');

        if (req.file) {
            if (image) {
                fs.unlink(`public/${image}`, (err) => {
                    if (err) {
                        req.flash('error', 'Cập nhật báo chí thất bại');
                        return res.redirect('back');
                    }
                });
            }
            image = '/uploads/media/' + req.file.filename;
        } else if (!imageInp && image) {
            fs.unlink(`public/${image}`, (err) => {
                if (err) {
                    req.flash('error', 'Cập nhật báo chí thất bại');
                    return res.redirect('back');
                }
            });
            image = '';
        }

        await mediaService
            .update({ _id: req.params.id }, { ...req.body, image })
            .catch((err) => {
                req.flash('error', 'Cập nhật báo chí thất bại');
                return res.redirect('back');
            });

        req.flash('success', 'Cập nhật báo chí thành công');
        res.redirect('/admin/bao-chi');
    }),

    // POST /admin/bao-chi/xoa
    delete: catchAsync(async (req, res) => {
        const { image } = await mediaService.getOne({ _id: req.body._id }, 'image');

        if (image) {
            fs.unlink(`public/${image}`, (err) => {
                if (err) {
                    req.flash('error', 'Xoá báo chí thất bại');
                    return res.redirect('back');
                }
            });
        }

        await mediaService.delete({ _id: req.body._id }).catch((err) => {
            req.flash('error', 'Xoá báo chí thất bại');
            return res.redirect('back');
        });

        req.flash('success', 'Xoá báo chí thành công');
        res.redirect('back');
    }),
};

module.exports = mediaController;
