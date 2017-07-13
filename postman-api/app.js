document.getElementById("search").addEventListener("click", function(){
    var name = document.querySelector("#pokemon-num").value;
    
    
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'http://pokeapi.co/api/v2/pokemon/' + name);
    xhr.send();
    
    xhr.onreadystatechange = function (){
        var DONE = 4;
        var OK = 200;
        if(xhr.readyState == DONE ){
            if(xhr.status == OK){
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                document.getElementById("pokemon-name").innerHTML = data.name;
                document.getElementById("pokemon-attack").innerHTML = data.base_experience;
                document.getElementById("pokemon-ability").innerHTML = data.abilities[0].ability.name;
            } else {
                console.log("err" + xhr.status);
            }
        }
    }
});

