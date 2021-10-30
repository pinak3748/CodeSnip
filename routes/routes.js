const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
const { register, login, logout } = require("../controllers/auth");
const { register_validation, login_validation } = require('../middleware/validation/auth')
const { isLoggedin } = require('../middleware/isLoggedin')


module.exports = function (app) {


    /* Auth routes */
    app.post("/register", register_validation, register);
    app.post("/login", login_validation, login)
    app.get("/logout", logout)


    //landing page
    app.get("/", function (req, res) {
        console.log(global.loggedin);
        res.send("hello its home page");
    });

    //details for not logged in user
    const {user_modal} = require('../controllers/user_dash')
    app.post('/dashboard/modal', user_modal)

    //display logged in user dashboard
    const {user_detail} = require('../controllers/user_dash')
    app.get('/dashboard', isLoggedin, user_detail)
    
    //edit profile dashboard
    const dash_update = require("../controllers/dash_update.js");
    app.post("/mydashboard/edit", isLoggedin, dash_update);

    //display discover page when user not logged in
    const { discover } = require('../controllers/discover')
    app.get('/discover', discover)

    //display discover page when user is logged in
    const { login_discover } = require('../controllers/discover')
    app.get('/login_discover', isLoggedin, login_discover)

    //dispslay snippet
    const mySnippet = require('../controllers/mySnippet')
    app.post("/mysnippet", isLoggedin, mySnippet)

    //create snippet
    const createSnippet = require('../controllers/createSnippet')
    app.post("/mysnippet/createsnippet", isLoggedin, createSnippet)

    // update snippet
    const { likeSnippet } = require('../controllers/favSnip')
    app.put("/likeSnippet", isLoggedin, likeSnippet)

    //unlike Snippet
    const { unlikeSnippet } = require('../controllers/favSnip')
    app.put("/unlikeSnippet", isLoggedin, unlikeSnippet)

    //view favourite Snippets
    const { favSnip } = require('../controllers/favSnip')
    app.get("/favsnip", isLoggedin, favSnip)

    app.post('/temp', function (req, res) {
        const token = jwt.sign({ name: "RhythmJain" }, process.env.token_secret, { algorithm: "HS256" })
        res.cookie('token', token, { httpOnly: true, expire: new Date() + 9999 });
        // return res.status(200).json({ token, data });
        return res.status(200).send("token generated");
    })

    const mail = require('../controllers/mail.js')
    app.post('/mail', mail)


};
