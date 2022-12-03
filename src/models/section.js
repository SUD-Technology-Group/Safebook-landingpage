const { Schema, model } = require('mongoose');

const Section = new Schema({
    title: { type: String, require: true },
    description: String,
    image: String,
    link: String,
    backgroundColor: {
        type: String,
        default: '#ffffff',
    },
    layout: {
        type: String,
        enum: [
            'Liên kết',
            'Giới thiệu',
            'Hỗ trợ',
            'Nội dung',
            'Đội ngũ',
            'Bình luận',
            'Video',
        ],
        require: true,
    },
});

module.exports = model('Section', Section);
