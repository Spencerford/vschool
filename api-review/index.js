const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const teamRoute = require("./routes/teams.js");


const app = express();
const PORT = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use("/teams", teamRoute)

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})