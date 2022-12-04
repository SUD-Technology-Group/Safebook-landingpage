const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    // config mail server
    service: 'Gmail',
    auth: {
        user: 'sudtechnology.group@gmail.com',
        pass: 'avrwttcqhfwyqent',
    },
});
