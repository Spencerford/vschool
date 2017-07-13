document.getElementById("box").addEventListener("mouseover", function () {
    this.style.backgroundColor = "blue";
})

window.addEventListener("mousedown", function () {
    document.getElementById("box").style.backgroundColor = "red";
})


document.getElementById("box").addEventListener("mouseout", function () {
    this.style.backgroundColor = "yellow";
})

document.getElementById("box").addEventListener("dblclick", function () {
    this.style.backgroundColor = "green";
})

window.addEventListener("scroll", function () {
    document.getElementById("box").style.backgroundColor = "Orange";
    console.log("hi")
})

window.addEventListener("keydown", function(event) {
  console.log(event.which) 
    if(event.which === 66){
        document.getElementById("box").style.backgroundColor = "blue";
    } else if(event.which === 82){
        document.getElementById("box").style.backgroundColor = "red";
    } else if(event.which === 89) {
        document.getElementById("box").style.backgroundColor = "yellow";
    } else if(event.which === 71){
        document.getElementById("box").style.backgroundColor = "green";
    } else if (event.which === 79){
        document.getElementById("box").style.backgroundColor = "orange";
    }
});
