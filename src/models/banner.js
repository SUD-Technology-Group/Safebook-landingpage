const { Schema, model } = require('mongoose');

const Banner = new Schema({
    images: [String],
    video: String,
});

module.exports = model('Banner', Banner);
