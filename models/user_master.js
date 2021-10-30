const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');

const user_master = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, 'username has been already taken'],
        required: [true, 'Username has been already taken'],
        trim: true,

    },
    email: {
        type: String,
        trim: true,
        unique: [true, 'Email has been already taken'],
        required: [true, 'Email is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        trim: true,
        required: true,
        min: [6, 'Password lenght should be minimum 6'],
        max: [15, 'Password lenght can be maximum of 15']
    }
})

user_master.plugin(uniqueValidator);
user_master.pre('save', function (next) {
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})

const usermaster = mongoose.model('user_master', user_master);
module.exports = usermaster;