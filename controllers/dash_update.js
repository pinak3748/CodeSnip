const user_info = require("../models/user_info");
const {validationResult} = require("express-validator");

module.exports = (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            params: errors.array()[0].params,
            error: errors.array()[0].msg,
        });
    }

    // const user_id = req.session.user_id;
    const user_id = res.locals.check._id
    
    const {fullname, location, bio, occupation} = req.body;
    user_info
        .updateOne(
            {user_id: user_id},
            {
                $set: {
                    fullname: fullname,
                    location: location,
                    bio: bio,
                    occupation: occupation,
                },
            },
            {upsert: true}
        )
        .then((result) => {
            // console.log(result)
            if (!result) {
                res.status(404).json({
                    err: "User does not Exist!"
                })
            } else {
                res.status(200).json({
                    msg: "Dashboard Updated!"
                })
            }
        })
        .catch((error) => {
            res.status(404).json({
                err: "Something Went Wrong!"
            })
        });


};
