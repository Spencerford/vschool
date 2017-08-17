let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bountydb")


let app = express();
const PORT = process.env.PORT || 8080;

let bountyRouter = require("./routes/bounty.js");


//allow express to handle json objects in req.body
app.use(bodyParser.urlencoded({extended: false}));
//allow express to handle json
app.use(bodyParser.json());

//allows cross site resource sharing
app.use(cors());

app.use("/bounty", bountyRouter);

app.listen(PORT, () => {
    console.log(`starting server on port ${PORT}`);
});