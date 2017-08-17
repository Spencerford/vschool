let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let settings = require("./config/settings.js");

//import routes
let authRouter = require("./routes/auth.js");
let hotelRouter = require("./routes/hotel.js");

const PORT = process.env.port || settings.port;

mongoose.connect(`mongodb://localhost:27017/${settings.db}`);

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/auth", authRouter);
app.use("/hotel", hotelRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

