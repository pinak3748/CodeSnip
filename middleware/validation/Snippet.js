const {check, validationResult} = require('express-validator');

exports.update_dashboard = (req, res) => [
    check("languages", "Please provide atleast one languages").isArray(),
    check("title", "Please provide a Title").isEmpty(),
    check("code", "please provide some code").isEmpty(),
    check("des", "please provide a description for the code").isEmpty(),


    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({errors: errors.array()[0].msg});
        next();
    },
]