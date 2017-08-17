let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

//url to connect to database --> mongo runs on port 27017
let url = "mongodb://localhost:27017/catbabies";



//connect to db takes the url and a callback function
MongoClient.connect(url, (err, db) => {
    if (err) {
        console.log("error in the running mongodb", err);
    } else {
        console.log("success you have connected to the database")
        //connect to the catbabies collection
        let catbabies = db.collection("catbabies");
        catbabies
            .find({})
            .toArray((err, data) => {
                console.log(data);
                db.close();
            });

        //insert a catbabay
        // catbabies.insertOne({
        //     name: "bob",
        //     color: "pink",
        //     age: 4
        // }, (err, result) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(result);
        //     }
        // });

        // catbabies.deleteOne({_id: new mongodb.ObjectID("597fb519a1cc5b487dc908b0")}, (err, result) => {
        //     if(err){
        //         console.log(err);
        //     } else {
        //         console.log(result);
        //     }
        // });
        // catbabies.updateOne({_id: new mongodb.ObjectID("597fb6ceeb9b4b49a669089f")}, {$set: {color: "red"}}, (err, result) => {
        //     if(err){
        //         console.log(err);
        //     } else {
        //         console.log("update was successful");
        //     }
        // });
    }
});
