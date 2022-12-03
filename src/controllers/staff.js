const catchAsync = require('../utils/catchAsync');

const { staffService } = require('../services');

const staffController = {
    // POST /admin/doi-ngu/them
    create: catchAsync(async (req, res) => {
        const image = req.file ? '/uploads/staff/' + req.file.filename : '';

        await staffService.create({ ...req.body, image }).catch((err) => {
            req.flash('error', 'Thêm staff thất bại');
            return res.redirect('back');
        });

        req.flash('success', 'Thêm staff thành công');
        res.redirect('back');
    }),

    // GET /admin/banner/:id
    updateView: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const staff = await staffService.getOne({ _id: req.params.id });
        res.render('admin/staff/update', {
            title: 'Chỉnh sửa nhân viên',
            layout: 'admin',
            staff,
            message,
        });
    }),

    // POST /admin/doi-ngu/sua
    update: catchAsync(async (req, res) => {
        const staff = await staffService.getOne({ _id: req.body._id });
        let image = '';

        if (req.file) {
            fs.unlink(`public/${staff.image}`, (err) => {
                if (err) {
                    req.flash('error', 'Cập nhật staff thất bại');
                    return res.redirect('back');
                }
            });
            image = '/uploads/staff/' + req.file.filename;
        }

        await staffService
            .update({ _id: req.body._id }, { ...req.body, image })
            .catch((err) => {
                req.flash('error', 'Cập nhật staff thất bại');
                return res.redirect('back');
            });

        req.flash('success', 'Cập nhật staff thành công');
        res.redirect('back');
    }),

    // POST /admin/doi-ngu/xoa
    delete: catchAsync(async (req, res) => {
        await staffService.delete({ _id: req.body._id }).catch((err) => {
            req.flash('error', 'Xoá staff thất bại');
            return res.redirect('back');
        });

        req.flash('success', 'Xoá staff thành công');
        res.redirect('back');
    }),
};

module.exports = staffController;
