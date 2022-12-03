const catchAsync = require('../utils/catchAsync');

const { commentService } = require('../services');

const commentController = {
    // POST /admin/binh-luan/them
    create: catchAsync(async (req, res) => {
        const avatar = req.file ? '/uploads/comment/' + req.file.filename : '';

        await commentService.create({ ...req.body, avatar }).catch((err) => {
            req.flash('error', 'Thêm bình luận thất bại');
            return res.redirect('back');
        });

        req.flash('success', 'Thêm bình luận thành công');
        res.redirect('back');
    }),

    // GET /admin/banner/:id
    updateView: catchAsync(async (req, res) => {
        const message = {
            error: req.flash('error'),
            success: req.flash('success'),
        };
        const comment = await commentService.getOne({ _id: req.params.id });
        res.render('admin/comment/update', {
            title: 'Chỉnh sửa bình luận',
            layout: 'admin',
            comment,
            message,
        });
    }),

    // POST /admin/binh-luan/sua
    update: catchAsync(async (req, res) => {
        const comment = await commentService.getOne({ _id: req.body._id });
        let avatar = '';

        if (req.file) {
            fs.unlink(`public/${comment.avatar}`, (err) => {
                if (err) {
                    req.flash('error', 'Cập nhật bình luận thất bại');
                    return res.redirect('back');
                }
            });
            avatar = '/uploads/comment/' + req.file.filename;
        }

        await commentService
            .update({ _id: req.body._id }, { ...req.body, avatar })
            .catch((err) => {
                req.flash('error', 'Cập nhật bình luận thất bại');
                return res.redirect('back');
            });

        req.flash('success', 'Cập nhật bình luận thành công');
        res.redirect('back');
    }),

    // POST /admin/binh-luan/xoa
    delete: catchAsync(async (req, res) => {
        await commentService.delete({ _id: req.body._id }).catch((err) => {
            req.flash('error', 'Xoá bình luận thất bại');
            return res.redirect('back');
        });

        req.flash('success', 'Xoá bình luận thành công');
        res.redirect('back');
    }),
};

module.exports = commentController;
