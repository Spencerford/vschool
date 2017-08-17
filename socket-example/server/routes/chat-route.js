let express = require("express");
let ChatRouter = express.Router();

//import model
let Chat = require("../models/chat.js");

ChatRouter.get("/", (req, res) => {
    Chat.find({}, (err, data) => {
        if(err) {
            res.status(500).send({"message": "YOO  there is an error", err});
        } else {
            res.status(200).send({"message": "YOO  here is your data", data});
        }
    });
});

module.exports = ChatRouter;