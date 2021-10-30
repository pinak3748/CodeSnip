const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const user_master = require('./user_master');

const user_info = new mongoose.Schema({
    fullname: {
        type: String,
        // required: true
    },
    location: {
        type: String,
        trim: true,
        // required: true
    },
    bio: {
        type: String,
        maxlength: 500,
        // required: true
    },
    occupation: {
        type: String,
        trim: true,
        // required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user_master,
        required: true
    }
})

user_info.plugin(uniqueValidator);
user_info.pre('save', function (next) {
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})

const UserInfo = mongoose.model('user_info ', user_info);
module.exports = UserInfo;