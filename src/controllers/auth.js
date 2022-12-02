const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const authController = {
	// GET admin/auth/login
	loginView: (req, res) => {
		const error = req.flash('error');
		res.render('auth/login', { title: 'Đăng nhập', layout: 'auth', error });
	},

	// POST admin/auth/login
	login: catchAsync(async (req, res) => {
		const { username, password } = req.body;
		if (!username || !password) {
			req.flash('error', 'Tên đăng nhập hoặc mật khẩu không hợp lệ!');
			return res.redirect('admin/auth/login');
		}
		const user = await userService.getOne({ username });
		if (user && bcrypt.compareSync(password, user.password)) {
			jwt.sign(
				{ username, id: user._id },
				'sud',
				{ expiresIn: '2h' },
				(err, token) => {
					if (err) {
						req.flash('error', 'Đăng nhập thất bại');
						return res.redirect('admin/auth/login');
					} else {
						res.cookie('AuthToken', token);
						return res.redirect('back');
					}
				}
			);
		} else {
			req.flash('error', 'Tên đăng nhập hoặc mật khẩu không hợp lệ!');
			res.redirect('admin/auth/login');
		}
	}),

	// POST admin/auth/change-password
    changePassword: catchAsync(async (req, res, next) => {
		const { currentPassword, newPassword, passwordConfirm } = req.body;

		if (!currentPassword || !newPassword || !passwordConfirm) {
			req.flash('error', 'Đổi mật khẩu thất bại');
			return res.redirect('admin/auth/change-password');
		}

		if (!(await bcrypt.compare(currentPassword, req.user.password))) {
			req.flash('error', 'Sai mật khẩu');
			return res.redirect('/auth/change-password');
		}

		if (passwordConfirm !== newPassword) {
			req.flash('error', 'Mật khẩu không trùng khớp');
			return res.redirect('/auth/change-password');
		}

		await userService.update(
			{
				_id: req.user._id,
			},
			{
				password: await bcrypt.hash(newPassword, 12),
			}
		);

		next();
	}),

	// GET admin/auth/logout
	logout: (req, res) => {
		res.clearCookie('AuthToken');
		res.redirect('/auth/login');
	},
};

module.exports = authController;
