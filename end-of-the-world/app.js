var count = 20;

var counter = setInterval(timer, 1000);

function timer(){
    count = count - 1;
    if(count <= 0){
        clearInterval(counter);
        document.getElementById("timer").innerHTML = "The world has ended... ";
        } 
    document.getElementById("clock").innerHTML = count + " Seconds";
}
