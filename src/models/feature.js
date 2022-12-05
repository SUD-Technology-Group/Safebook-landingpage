const { Schema, model } = require('mongoose');

const Feature = new Schema({
    title: { type: String, required: true },
    image: String,
    description: String,
});

module.exports = model('Feature', Feature);
