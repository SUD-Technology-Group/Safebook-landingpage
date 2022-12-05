const { Schema, model } = require('mongoose');

const Section = new Schema({
    title: String,
    description: String,
    image: String,
    link: String,
    backgroundColor: {
        start: String,
        end: String,
    },
    layout: {
        type: String,
        enum: [
            'Liên kết',
            'Giới thiệu',
            'Hỗ trợ',
            'Nội dung',
            'Thành tựu',
            'Tính năng',
            'Đội ngũ',
            'Bình luận',
            'Video',
        ],
        require: true,
    },
});

module.exports = model('Section', Section);
