const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');

module.exports = catchAsync(async (req, res, next) => {
    if (req.path.includes('auth')) return next();

    const token = req.cookies.AuthToken;
    if (!token) {
        req.flash('error', 'Vui lòng đăng nhập.');
        return res.redirect('admin/auth/login');
    }

    jwt.verify(token, 'sud', async (err) => {
        if (err) {
            req.flash('error', 'Vui lòng đăng nhập.');
            return res.redirect('admin/auth/login');
        }
        return next();
    });

    next();
});
