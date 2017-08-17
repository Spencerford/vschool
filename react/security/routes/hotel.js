let express = require("express");
let hotelRouter = express.Router();

let expressjwt = require("express-jwt");
let settings = require("../config/settings.js");

let authorization = expressjwt({
    secret: settings.secret
});

hotelRouter.get("/events", (req, res) => {
    res.status(200).send({"message": "Here are the events going on at the hotel", data: []});
});

hotelRouter.get("/guests", authorization, (req, res) => {
    res.status(200).send({"message": "Here are the guests staing at the hotel", data: []});
});

module.exports = hotelRouter;