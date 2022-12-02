const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

User.pre('save', async function (next) {
    // 12 is salt length
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = model('User', User);
