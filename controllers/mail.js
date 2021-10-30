require('dotenv').config();
const nodemailer = require('nodemailer');
const mailtemp = require('../assets/index.js')
module.exports = (req, res) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
    });
    // console.log(req.body.name)
    let mailDetails = {
        from: 'CodeSnipDevelopers@gmail.com',
        to: req.body.email,
        subject: 'Test mail',
        text: 'Node.js testing mail for GeeksforGeeks',
        html: mailtemp(req.body.name)
    };

    transporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log(err,'Error Occurs');
            res.status(401).json({msg: "cannot send mail"})
        } else {
            console.log('Email sent successfully');
            res.status(200).json({msg: "mail sent"})
        }
    });

}
