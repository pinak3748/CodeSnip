const mongoose = require('mongoose');
const user_snip = require('./user_snip');
const user_master = require('./user_master');

const user_fav = new mongoose.Schema({
    // snip_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: user_snip,
    //     required: true
    // },
    snips_liked: {

        type: [mongoose.Schema.Types.ObjectId],
        ref: user_snip,
        required: true,
    },
    liked_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user_master,
        required: true
    }
})
const userfav = mongoose.model('user_fav', user_fav);
module.exports = userfav;