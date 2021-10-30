const user_master = require("../models/user_master");
const user_info = require("../models/user_info");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
require("dotenv").config();

/* Register */
exports.register = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      params: errors.array()[0].params,
      error: errors.array()[0].msg,
    });
  }

  const user = new user_master(req.body);

  user.save((error, result) => {
    if (error) {
      let errors = Object.values(error.errors).map((el) => el.message);
      let fields = Object.values(error.errors).map((el) => el.path);

      // console.log(errors, fields);
      const reg = /Value: `[\w_@./#&+-]*`$| Value: ``$/g;
      const reg2 = /`|,/g;


      const str1 = errors[0]
        .replace(reg, "")
        .replace(/Error/g, "")
        .replace(/ expected/g, "")
        .replace(reg2, "")
        .replace(/[.]/g, "");
      const formattedErrors = str1;

      if (errors.length > 1) {
        const str2 = errors[1]
          .replace(reg, "")
          .replace(/Error/g, "")
          .replace(/ expected/g, "")
          .replace(reg2, "")
          .replace(/[.]/g, "");
        formattedErrors = formattedErrors.concat(str2);
      }

      
      // console.log(formattedErrors);
      res.status(400).json({
        msg: formattedErrors,
      });
    }
    if (result) {
      //below details will be saved in user_info collection as a blamk data
      var info = new user_info({
        fullname: "",
        location: "",
        bio: "",
        occupation: "",
        user_id: result._id,
      })
      info.save((err, resu) => {
        if (resu) {
          res.status(200).json({
            msg: "Account created!",
          });
        }
        if(err) console.log(err);
      });
    }
  });
};

/* Login */
exports.login = (req, res) => {
  const { username, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      params: errors.array()[0].params,
      error: errors.array()[0].msg,
    });
  }

  user_master.findOne({ username }, (err, result) => {
    if (err) {
      return res.status(400).json({
        msg: err,
      });
    }
    if (!result) {
      return res.status(400).json({
        msg: "Invalid Credentials",
      });
    }

    const isMatch = bcrypt.compareSync(password, result.password);
    if (!isMatch) {
      return res.status(401).json({
        msg: "Invalid Credentials",
      });
    } else {
      const { password, ...data } = result.toJSON();

      // create token
      const token = jwt.sign({ _id: result._id }, process.env.token_secret, {
        algorithm: "HS256",
      });
      // res.cookie("token", token, { httpOnly: true, sameSite: 'None', secure: true, expire: new Date() + 9999 });
      // return res.status(200).json({ token, data });
      return res.status(200).send({token, data});
    }
  });
};

/*Logout */
exports.logout = (req, res) => {
  res.clearCookie("token", { httpOnly: true });
  res.json({
    msg: "User Signout Successfully",
  });
};
