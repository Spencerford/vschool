axios.get("http://api.vschool.io:6543/hitlist.json").then(function (response) {
    

    var createHitBox = function (name, img) {
        var colmd4 = document.createElement("div");
        colmd4.setAttribute("class", "col-md-4");

        var hitBox = document.createElement("div");
        hitBox.setAttribute("class", "hit-box");

        hitBox.style.background = "url('" + img + "')";
        hitBox.style.backgroundSize = "cover";
        hitBox.style.backgroundPosition = "center";

        var nameBox = document.createElement("div");
        nameBox.setAttribute("class", "name");
        nameBox.innerHTML = name;


        colmd4.appendChild(hitBox);
        colmd4.appendChild(nameBox);

        document.querySelector("#myRow").appendChild(colmd4);
   }
    console.log(response);
    console.log(response.length);
    for (var i = 0; i < response.data.length; i++) {
        createHitBox(response.data[i].name, response.data[i].image);
    }
}).catch(function (err) {
    console.log(err);
});


