const user_fav = require('../models/user_fav');
const user_snip = require("../models/user_snip");
const { validationResult } = require("express-validator");

exports.favSnip = async (req, res) => {
    try {
        const user_id = res.locals.check._id;
        const favsnip = await user_fav.findOne({ liked_by: user_id }).populate("snips_liked");
        if (favsnip) {
          
            res.status(200).json(favsnip)
        } else {
            res.status(204).json({
                err: "you have not liked any snippet"
            })
        }

    } catch (error) {
        console.log('err in favsnip')
        res.status(400).json({
            err: "something went wronge!"
        })
    }
}

exports.likeSnippet = (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            params: errors.array()[0].params,
            error: errors.array()[0].msg,
        });
    }

    const user_id = res.locals.check._id
    const { snip_id, likes } = req.body;

    user_snip.findByIdAndUpdate(snip_id, { $set: { likes: likes } }, { upsert: true, new: true }, (error, result) => {
        if (error) {
            res.status(400).json({
                err: error
            })
        }
        if (result) {
            user_fav.findOneAndUpdate({ liked_by: user_id }, { $addToSet: { snips_liked: snip_id } }, { upsert: true }, (err, resu) => {
                if (err) {
                    res.status(400).json({ err: err })
                }
                if (resu) {
                    res.status(201).json({
                        msg: "Snippet Liked",
                        likes: result.likes
                    })
                }
            })
        }
    })
};

exports.unlikeSnippet = (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            params: errors.array()[0].params,
            error: errors.array()[0].msg,
        });
    }

    const user_id = res.locals.check._id
    const { snip_id, likes } = req.body;


    user_snip.findByIdAndUpdate(snip_id, { $set: { likes: likes } }, { upsert: true, new: true }, (error, result) => {
        if (error) {
            res.status(400).json({
                err: error
            })
        }
        if (result) {
            user_fav.findOneAndUpdate({ liked_by: user_id }, { $pull: { snips_liked: snip_id } }, (err, resu) => {
                if (err) {
                    res.status(400).json({ err: err })
                }
                if (resu) {
                    res.status(201).json({
                        msg: "Snippet Disliked",
                        likes: result.likes
                    })
                }
            })
        }
    })
};