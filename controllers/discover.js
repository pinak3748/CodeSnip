const user_fav = require('../models/user_fav')
const user_snip = require('../models/user_snip')

exports.login_discover = (req, res) => {
    const user_id = res.locals.check._id;

    user_snip.aggregate(
        [{ $sample: { size: 50 } }], (error, result) => {
            if (error) {
                return res.status(400).json({
                    err: "There are no snip to show"
                })
            }
            let arr = [];
            var promise = result.map(async (r) => {
                try {
                    const query = await user_fav.findOne({ $and: [{ liked_by: user_id }, { snips_liked: r._id }] })
                    if (query) {
                        r.liked = true;
                    } else {
                        r.liked = false;
                    }
                    arr.push(r)
                } catch (error) {
                    console.log(error)
                }
            })
            Promise.all(promise).then(() => {
                return res.status(200).json(arr)
            })
        })
}

exports.discover = (req, res) => {

    user_snip.aggregate(
        [{ $sample: { size: 50 } }], (error, result) => {
            if (error) {
                return res.status(400).json({
                    err: "There are no snip to show"
                })
            }
            if (result) {
                return res.status(200).json(result)
            }
        })
}