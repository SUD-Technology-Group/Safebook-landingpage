const { Schema, model } = require('mongoose');

const Section = new Schema({
  title: String,
  description: String,
  image: String,
  content: String,
  backgroundColor: String,
});

module.exports = model('Section', Section);
