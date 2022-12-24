const catchAsync = require('../utils/catchAsync');
const fs = require('fs');

const { bannerService } = require('../services');

const bannerController = {
    // POST /admin/banner/:id
    update: catchAsync(async (req, res) => {
        const { bannerInp } = req.body;
        const video = req.body.video.split('=')[1];
        let { image } = await bannerService.getOne({ _id: req.params.id }, 'image');

        if (req.file) {
            if (image) {
                fs.unlink(`public/${image}`, (err) => {
                    if (err) {
                        req.flash('error', 'Cập nhật banner thất bại');
                        return res.redirect('back');
                    }
                });
            }
            image = '/uploads/banner/' + req.file.filename;
        } else if (!bannerInp && image) {
            fs.unlink(`public/${image}`, (err) => {
                if (err) {
                    req.flash('error', 'Cập nhật banner thất bại');
                    return res.redirect('back');
                }
            });
            image = '';
        }

        await bannerService
            .update({ _id: req.params.id }, { video, image })
            .catch((err) => {
                console.log(err);
                req.flash('error', 'Cập nhật banner thất bại');
                return res.redirect('back');
            });

        req.flash('success', 'Cập nhật banner thành công');
        res.redirect('/admin');
    }),
};

module.exports = bannerController;
