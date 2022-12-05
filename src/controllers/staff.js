const catchAsync = require('../utils/catchAsync');
const fs = require('fs');

const { staffService } = require('../services');

const staffController = {
    // POST /admin/doi-ngu/them
    create: catchAsync(async (req, res) => {
        const avatar = req.file ? '/uploads/staff/' + req.file.filename : '';

        await staffService.create({ ...req.body, avatar }).catch((err) => {
            req.flash('error', 'Thêm nhân viên thất bại');
            return res.redirect('back');
        });

        req.flash('success', 'Thêm nhân viên thành công');
        res.redirect('back');
    }),

    // GET /admin/banner/:id
    updateView: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const staff = await staffService.getOne({ _id: req.params.id }, '-_id -__v');
        res.render('admin/staff/update', {
            title: 'Chỉnh sửa nhân viên',
            layout: 'admin',
            staff,
            message,
        });
    }),

    // POST /admin/doi-ngu/:id
    update: catchAsync(async (req, res) => {
        const { avatarInp } = req.body;
        let { avatar } = await staffService.getOne({ _id: req.params.id }, 'avatar');

        if (req.file) {
            if (avatar) {
                fs.unlink(`public/${avatar}`, (err) => {
                    if (err) {
                        req.flash('error', 'Cập nhật nhân viên thất bại');
                        return res.redirect('back');
                    }
                });
            }
            avatar = '/uploads/staff/' + req.file.filename;
        } else if (!avatarInp && avatar) {
            fs.unlink(`public/${avatar}`, (err) => {
                if (err) {
                    req.flash('error', 'Cập nhật nhân viên thất bại');
                    return res.redirect('back');
                }
            });
            avatar = '';
        }

        await staffService
            .update({ _id: req.params.id }, { ...req.body, avatar })
            .catch((err) => {
                req.flash('error', 'Cập nhật nhân viên thất bại');
                return res.redirect('back');
            });

        req.flash('success', 'Cập nhật nhân viên thành công');
        res.redirect('/admin/doi-ngu');
    }),

    // POST /admin/doi-ngu/xoa
    delete: catchAsync(async (req, res) => {
        const { avatar } = await staffService.getOne({ _id: req.body._id }, 'avatar');

        if (avatar) {
            fs.unlink(`public/${avatar}`, (err) => {
                if (err) {
                    req.flash('error', 'Xoá nhân viên thất bại');
                    return res.redirect('back');
                }
            });
        }
        await staffService.delete({ _id: req.body._id }).catch((err) => {
            req.flash('error', 'Xoá nhân viên thất bại');
            return res.redirect('back');
        });

        req.flash('success', 'Xoá nhân viên thành công');
        res.redirect('back');
    }),
};

module.exports = staffController;
