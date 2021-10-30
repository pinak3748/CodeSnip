const mongoose = require('mongoose');
const user_master = require('./user_master');

const user_snip = new mongoose.Schema({
    languages: {

        type: [String],
        default: [],
        required: true,
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    likes: {
        type: Number,
        default: 0,
    },
    code: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user_master,
        required: true
    },
    username: {
        type: String,
        ref: user_master,
        required: true
    }
}, {

    timestamps: true

})
const usersnip = mongoose.model('user_snip', user_snip);
module.exports = usersnip;