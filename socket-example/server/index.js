let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let cors = require("cors");

let Chat =require("./models/chat.js");

//new imports 
let socketIO = require("socket.io");

//impor troutes
let ChatRouter = require("./routes/chat-route.js");

let PORT = process.env.PORT || 9000;

mongoose.connect("mongodb://localhost:27017/mychat");

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use("/chat", ChatRouter);

let server = app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});

//make an instance of socket.io called io pass it your express server
let io = socketIO(server);

//socktio logic

io.on("connection", (socket) => {
    console.log(`client with id of ${socket.id} has conected`);

    //chat logic
    socket.on("add-chat", (chatData) => {
        console.log(chatData);
        let newChat = new Chat(chatData);

        newChat.save((err, result) => {
            if(err){
                console.log("Error saving message", err);
            } else {
                //emit message out to all users
                io.emit("chat-added", chatData);
            }
        })
    })

    //disconnect logic
    socket.on("disconnect", () => {
        console.log(`client with id of ${socket.id} has disconnected`)
    });
});

