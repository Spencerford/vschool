let express = require("express");
let todoRouter = express.Router();

let Todo = require("../models/todo.js");

todoRouter.get("/", (req, res) => {
    Todo.find({}, (err, data) => {
        if(err) {
            res.status(500).send({"message": "error withiin server", err});
        } else {
            res.status(200).send({"message": "Success here is your data", data})
        }
    });
});

todoRouter.post("/", (req, res) => {
    let newTodo = new Todo(req.body);
    newTodo.save((err, data) => {
        if(err){
            res.status(500).send({"message": "error within server", err});
        } else {
            res.status(201).send({"message": "item was created", data});
        }
    })
});

todoRouter.put("/:id", (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
        if(err){
            res.status(500).send({"message": "error withiin server", err});
        } else if (data === null){
            res.status(404).send({"message": `item with id of ${req.params.id} was not found`})
        } else {
            res.status(200).send({"message": "Item was successfully updated", data});
        }
    })
});

todoRouter.delete("/:id", (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, data) => {
        if(err){
            res.status(500).send({"message": "error within server", err});
        } else if(data === null){
            res.status(404).send({"message": `item with id of ${req.params.id} was not found`})
        } else {
            res.status(200).send({"message": "Item was successfully deleted", data});
        }
    });
});

module.exports = todoRouter;