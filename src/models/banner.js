const { Schema, model } = require('mongoose');

const Banner = new Schema({
    content: String,
    image: String,
    backgroundImage: String,
});

module.exports = model('Banner', Banner);
