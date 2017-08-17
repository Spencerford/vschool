let express = require("express")
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

let todoRouter = require("./routes/todo-route.js");

mongoose.connect("mongodb://localhost:27017/todos");

let app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use("/todo", todoRouter);

app.listen(PORT, () => {
    console.log(`starting server on port ${PORT}`)
})
