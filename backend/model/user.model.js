const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);