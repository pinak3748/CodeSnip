const user_snip = require("../models/user_snip");

module.exports = async (req, res) => {
    try {
        const user_id = res.locals.check._id;
        const mysnippet = await user_snip
            .findOne({user_id: user_id})
            .populate("user_id");

        if (mysnippet) {
           
            res.json(mysnippet);
        } else {
            res.status(404).json({
                err: "You have no snippet"
            })
        }
    } catch (err) {
        res.status(400).json({
            err: "something went wronge!"
        })
    }
};
