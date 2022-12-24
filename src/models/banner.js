const { Schema, model } = require('mongoose');

const Banner = new Schema({
    image: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
});

module.exports = model('Banner', Banner);
