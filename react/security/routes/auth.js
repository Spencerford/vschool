let express = require("express");
let authRouter = express.Router();

let settings = require("../config/settings.js");

let passport = require("passport");
let Strategy = require("passport-local");

let jwt = require("jsonwebtoken");

let User = require("../models/user.js");

passport.use(new Strategy((username, password, done) => {
    User.findOne({username}, (err, currentUser) => {
        if(err){
            done(err, false);
        } else if (currentUser === null){
            done(null, false)
        } else {
            currentUser.auth(password, (isCorrect) => {
                if(isCorrect){
                    done(null, true);
                } else {
                    done(null, false);
                }
            });
        }
    })
}));

authRouter.use(passport.initialize());

authRouter.post("/login", passport.authenticate("local", {session: false}), (req, res) => {
    User.findOne({username: req.body.username}, (err, result) => {
        if(err){
            res.status(500).send({"message": "Internet Error", err})
        } else {
            res.status(201).send({
                "message": "success Auth token issued",
                "token": jwt.sign({username: result.username}, settings.secret, {expiresIn: 30 * 60})
            });
        }
    })
})

authRouter.post("/signup", (req, res) => {
    let newUser = new User(req.body);
    newUser.save((err, data) => {
        if(err){
            res.status(500).send({"message": "Internet Error", err})
        } else {
            res.status(201).send({"message": `New user was created with username of ${data.username}`})
        }
    });
});

module.exports = authRouter;