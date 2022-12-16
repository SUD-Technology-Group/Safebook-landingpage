const { Schema, model } = require('mongoose');

const Media = new Schema({
    image: String,
    link: String,
});

module.exports = model('Media', Media);
