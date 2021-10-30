const user_snip = require("../models/user_snip");
const user_master = require("../models/user_master")
const {validationResult} = require("express-validator");


module.exports = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            params: errors.array()[0].params,
            error: errors.array()[0].msg,
        });
    }

    const user_id = res.locals.check._id;
    // console.log(user_id, 'user_id snippet')
    const { languages, title, code, des } = req.body;

    user_master.findOne({_id: user_id}, (er, data) => {
        if (er) {
            res.status(400).json({
                err: "Username does not exist!",
            });
        }

        if (data) {
            user_snip.create({
                languages: languages,
                title: title,
                code: code,
                des: des,
                user_id: user_id,
                username: data.username,
            }, (error, result) => {
                if (error) {
                    res.status(400).json({
                        err: error
                    })
                }
                if (result) {
                    res.status(201).json({
                        msg: "Snippet created"
                    })
                }
            })
        }


    })
};
