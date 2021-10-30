const mongoose = require('mongoose');
const user_master = require('./user_master');

const user_links = new mongoose.Schema({
    medium: {
        type: String,
        trim: true,
    },
    stackoverflow: {
        type: String,
        trim: true,
    },
    linkedin: {
        type: String,
        trim: true,
    },
    github: {
        type: String,
        trim: true,
    },
    twitter: {
        type: Number,
        trim: true,
    },
    personal_website: {
        type: String,
        trim: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user_master,
        required: true
    }
})
const userlinks = mongoose.model('user_links', user_links);
module.exports = userlinks;