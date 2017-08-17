const express = require("express");
const teamRoute = express.Router();
let uuid = require("uuid/v1");

let teams = [
    {
        _id: uuid(),
        name: "utah jazz",
        location: "slc",
        sport: "basketball",
        stadium: "vivant",
        mascot: "bear"
    },
    {
        _id: uuid(),
        name: "utes",
        location: "slc",
        sport: "football",
        stadium: "rice eccles",
        mascot: "swoop"
    },
    {
        _id: uuid(),
        name: "rsl",
        location: "slc",
        sport: "soccer",
        stadium: "rio tinto",
        mascot: "lion"
    }
    ]

teamRoute.route("/")
    .get((req, res) => {
    res.send(teams.filter((team) => {
        for(let key in req.query){
            if(req.query[key] != team[key]) return false
        }
        return true;
    }));
})
    .post((req, res) => {
        //add new teams to teams
        let template = {
            name: "",
            location: "",
            sport: "",
            stadium: "",
            mascot: ""
        };

        for(let key in req.body){
            if(!template.hasOwnProperty(key)){
                continue;
            } else {
                template[key] = req.body[key];
            }
        }

        let newTeam = req.body;
        newTeam._id = uuid();
        teams.push(newTeam);
        res.status(201).send({"message": "success data was posted"});
    })

teamRoute.route("/:id").get((req, res) => {
    for(let i = 0; i < teams.length; i++){
        if(teams[i]._id === req.params.id){
            res.send(teams[i])
        }
    }
})
    .delete((req, res) => {
        for(let i = 0; i < teams.length; i++){
            if(teams[i]._id === req.params.id){
                teams.splice(i, 1);
                res.status(200).send({"message": "successfully removed team"});
            }
        }
    })
    .put((req, res) => {
        for(let i = 0; i < teams.length; i++){
            if(teams[i]._id === req.params.id){
                for(let key in req.body){
                    if(teams[i].hasOwnProperty(key)){
                        teams[i][key] = req.body[key]
                    }
                }
                res.status(200).send({"message": "successfully updated team"});
            }
        }
    })

module.exports = teamRoute;