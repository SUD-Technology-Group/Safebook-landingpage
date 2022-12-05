const { Schema, model } = require('mongoose');

const Feature = new Schema({
    title: String,
    image: String,
    description: String,
});

module.exports = model('Feature', Feature);
