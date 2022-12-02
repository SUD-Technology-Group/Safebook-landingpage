const { Schema, model } = require('mongoose');

const Comment = new Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: String,
    content: {
        type: String,
        required: true,
    },
});

module.exports = model('Comment', Comment);
