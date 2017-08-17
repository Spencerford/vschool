let express = require("express");
let bountyRouter = express.Router();

let Bounty = require("../models/bounty.js");

bountyRouter.get("/", (req, res) => {
    Bounty.find({}, (err, data) => {
        if(err) {
            res.status(500).send({"message": "error within server", err});
        } else {
            res.status(200).send({"message": "success!  here is your data", data})
        }
    });
});

bountyRouter.post("/", (req, res) => {
    let newBounty = new Bounty(req.body);
    newBounty.save((err, data) => {
        if(err){
            res.status(500).send({"message": "error within server", err});
        } else {
            res.status(201).send({"message": "item was created", data});
        }
    });
});

bountyRouter.put("/:id", (req, res) => {
    Bounty.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
        if(err){
            res.status(500).send({"message": "error within server", err});
        } else if (data === null){
            res.status(404).send({"message": `item with id of ${req.params.id} was not found`})
        } else {
            res.status(200).send({"message": "item was successfully updated", data});
        }
    });
});

bountyRouter.delete("/:id", (req, res) => {
   Bounty.findByIdAndRemove(req.params.id, (err, data) => {
       if(err){
           res.status(500).send({"message": "error within server", err});
       } else if(data === null){
           res.status(404).send({"message": `item with id of ${req.params.id} was not found`});
       } else {
           res.status(200).send({"message": "item was succefully deleted", data});
       }
   });
});



module.exports = bountyRouter;