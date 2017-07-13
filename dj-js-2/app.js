document.querySelector(".box").addEventListener("click", function(){
    var self = this
    this.classList.add("box-2");
    setTimeout(function() {
        self.classList.remove("box-2");
    }, 1500);
})

document.querySelector(".box").addEventListener("mouseout", function(){
    
})


var x = document.getElementById("my-audio");

function playAudio() {
    x.play();
}

function pauseAudio(){
    x.pause();
}