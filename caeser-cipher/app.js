//var readline = require('readline-sync');
//var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
//var shift = parseInt(readline.question('How many letters would you like to shift? '));

//text to be incoded
//number of positions to move
//alphabet
//interval [0, 26]
//

var code = "v school is awesome";

var caesarShift = function (code) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var alphaArray = alphabet.split("");
    var numToShift = 10;
    var coded = [];

    for (var i = 0; i < code.length; i++) {
        if (alphaArray.indexOf(code[i]) !== -1) {
            var indexalpha = alphaArray.indexOf(code[i]);
            var indexOfChar = (indexalpha + numToShift) % 26;

            coded.push(alphaArray[indexOfChar]);
        }
    }
    return coded;
}

console.log(caesarShift(code));

var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cipher(str, key) {
    var output = "";
    str = str.toLowerCase();

    for (var i = 0; i < str.length; i++) {
        var index = alpha.indexOf(str[i])
        if (index != -1) {
            index += key;
            index = index % alpha.length; 
            if(index < 0){
                index += alpha.length;
            }
        } else {
            output += str[i];
        }
    }
    return output;
}

cipher(hello world!, 3);
