const { Schema, model } = require('mongoose');

const Staff = new Schema({
    avatar: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    phone: String,
    facebook: String,
});

module.exports = model('Staff', Staff);
