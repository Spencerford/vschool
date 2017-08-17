//import express
let express = require("express");
//make a mini express app
let artistRouter = express.Router();
let uuid = require("uuid/v1");

let musicArr = [
    {
        id: uuid(),
        artist: "Alessia Cara",
        genre: "R&B",
        from: "Canada",
        "song": "Here"
    },
    {
        id: uuid(),
        artist: "2Pac",
        genre: "Rap",
        from: "USA",
        "song": "California Love"
    }
];


artistRouter.get("/", (req, res) => {
    console.log(req.query)
    let search = musicArr.filter((artist) => {
        for(let key in req.query){
            if(req.query[key] !== artist[key]) return false;
        }
        return true;
    });

    res.status(200).send({"message": "Success!  Here is your data", data: search});
});

artistRouter.get("/:id", (req, res) => {
    for(let i = 0; i < musicArr.length; i++){
        if(musicArr[i].id === req.params.id){
            return res.send(musicArr[i]);
        }
    }
});

artistRouter.delete("/:id", (req, res) => {
    for(let i = 0; i < musicArr.length; i++){
        if(musicArr[i].id === req.params.id){
            musicArr.splice(i, 1);
            return res.send({
                message: "delete successful"
            })
        }
    }
    return res.send({
        message: "ERROR NOT FOUND"
    });
});

artistRouter.post("/",  (req, res) => {
    let newMusic = req.body;
    newMusic.id = uuid();
    musicArr.push(newMusic);
    res.status(201).send({"message": "Success! data was posted"});
})

artistRouter.put("/:id", (req, res) => {
    for(let i = 0; i < musicArr.length; i++){
        if(musicArr[i].id === req.params.id){
            for(let key in req.body){
                if(musicArr[i].hasOwnProperty(key)){
                    musicArr[i][key] = req.body[key];
                }
            };
            return res.status(200).send({
                message: "UPDATE SUCCESSFUL"
            });
        }
    }
    return res.status(404).send({
        message: "ERROR NOT FOUND"
    });
});

module.exports = artistRouter;