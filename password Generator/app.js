var randomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var index = randomNum(0, 250);
console.log(index);

var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1','2','3','4','5','6','7','8','9','$','!','(',')'];
var randomChar = function () {
    var index = randomNum(0, alpha.length);
    return alpha[index];
}


document.getElementById("button").addEventListener("click", function () {
    var passwordLength = Number(document.querySelector("#input").value);
    var str = "";

    for (var i = 0; i < passwordLength; i++) {
        str += randomChar();
    }
    document.querySelector("#answer").innerHTML = str;

})
