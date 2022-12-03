const catchAsync = require('../utils/catchAsync');
const fs = require('fs');

const { sectionService } = require('../services');

const sectionController = {
    // GET /admin/banner/:id
    updateView: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const section = await sectionService.getOne({ _id: req.params.id });
        res.render('admin/section/update', {
            title: 'Chỉnh sửa section',
            layout: 'admin',
            section,
            message,
        });
    }),

    // POST /admin/section/:id
    update: catchAsync(async (req, res) => {
        let { image } = await sectionService.getOne({ _id: req.params.id });

        if (req.file) {
            fs.unlink(`public/${image}`, (err) => {
                if (err) {
                    req.flash('error', 'Cập nhật section thất bại');
                    return res.redirect('back');
                }
            });
            image = '/uploads/section/' + req.file.filename;
        }

        await sectionService
            .update({ _id: req.params.id }, { ...req.body, image })
            .catch((err) => {
                req.flash('error', 'Cập nhật section thất bại');
                return res.redirect('back');
            });

        req.flash('success', 'Cập nhật section thành công');
        res.redirect('/admin/section');
    }),
};

module.exports = sectionController;
