const catchAsync = require('../utils/catchAsync');
const fs = require('fs');

const { bannerService } = require('../services');

const bannerController = {
    // POST /admin/banner/:id
    update: catchAsync(async (req, res) => {
        const { radio, bannerInp } = req.body;
        let { images, video } = await bannerService.getOne(
            {
                _id: req.params.id,
            },
            'images video'
        );

        if (radio == 'video') {
            images = [];
            video = req.body.video.split('=')[1];
        } else {
            video = '';
            if (req.files.length > 0) {
                images.forEach((item) => {
                    fs.unlink(`public/${item}`, (err) => {
                        if (err) {
                            req.flash('error', 'Cập nhật banner thất bại');
                            return res.redirect('back');
                        }
                    });
                });
                images = [];
                req.files.map((f) => {
                    let url = '/uploads/banner/' + f.filename;
                    images.push(url);
                });
            } else if (!bannerInp && images) {
                images.forEach((item) => {
                    fs.unlink(`public/${item}`, (err) => {
                        if (err) {
                            req.flash('error', 'Cập nhật banner thất bại');
                            return res.redirect('back');
                        }
                    });
                });
                images = [];
            }
        }

        await bannerService
            .update({ _id: req.params.id }, { video, images })
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
