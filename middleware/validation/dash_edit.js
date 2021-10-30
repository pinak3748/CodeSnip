const {check, validationResult} = require('express-validator');

exports.update_dashboard = (req, res) => [
    check("fullname", "Please provide valid Full Name").matches(/^[a-z]+(?:\s[a-z]+)+$/),
    check("location").isString(),
    check("bio", "Bio should atleast contain 10 char or 250 at most!").isLength({min: 10, max: 250}),
    check("occupation").isString(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({errors: errors.array()[0].msg});
        next();
    },
]