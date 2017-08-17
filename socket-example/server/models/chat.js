let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ChatSchema = new Schema({
    username: String,
    message: String
});

module.exports = mongoose.model("chat", ChatSchema);