const user_snip = require("../models/user_snip");
const { validationResult } = require("express-validator");

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
    
    user_snip.findByIdAndUpdate(snip_id, {$set: {likes: likes}}, {upsert: true, new: true}, (error, result) => {
        if (error) {
            res.status(400).json({
                err: error
            })
        }
        if (result) {
            console.log(result.likes)
            res.status(201).json({
                msg: "Like Updated",
                resultt: result.likes
            })
        }
    })
};
