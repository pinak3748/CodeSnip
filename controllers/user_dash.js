const user_master = require("../models/user_master");
const user_snip = require("../models/user_snip");
const user_info = require("../models/user_info");

exports.user_detail = (req, res) => {

    const user_id = res.locals.check._id
    console.log(user_id, "user_id")

    user_info.findOne({user_id: user_id}).populate('user_id').then((info) => {
        if (info) {
            user_snip.find({user_id: user_id}).then((snip) => {
                if (snip) {
                    res.status(200).json({info, snip}) //snip not send yet
                } else {
                    res.status(404).json({msg: 'No info found'})
                }
            }).catch((error) => {
                return res.status(404).json({
                    err: " snip Username does not exist!"
                })
            })
        } else {
            res.status(404).json({msg: 'No info found'})
        }
    }).catch((error) => {
        return res.status(404).json({
            err: "info Username does not exist!"
        })
    })

};

exports.user_modal =(req,res) => {
console.log(req.body)
   const {user_id} = req.body

    user_info.findOne({user_id: user_id}).populate('user_id').then((info) => {
        if (info) {
            user_snip.find({user_id: user_id}).then((snip) => {
                if (snip) {
                    res.status(200).json({info, snip}) //snip not send yet
                } else {
                    res.status(404).json({msg: 'No info found'})
                }
            }).catch((error) => {
                return res.status(404).json({
                    err: " snip Username does not exist!"
                })
            })
        } else {
            res.status(404).json({msg: 'No info found'})
        }
    }).catch((error) => {
        return res.status(404).json({
            err: "info Username does not exist!"
        })
    })

}
