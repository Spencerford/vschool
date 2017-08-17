let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");


//import routes
let artistRouter = require("./routes/artist.js");

let app = express();
const PORT = process.env.PORT || 8080;



app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(cors());

//use our routes
app.use("/music", artistRouter);



app.listen(PORT, () => {
    console.log(`starting server on port ${PORT}`);
});