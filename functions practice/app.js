function sum(num1, num2){
    return (num1 + num2);
}

console.log(sum(20, 20) + "here is the sum");


function larg(num1, num2, num3){
    return Math.max(num1, num2, num3)
}

console.log(larg(6, 15, 11));


var evenOrOdd = function (num1) {
    if (num1 % 2 === 0){
        return ("even");
    } else{
        return ("odd");
    }
}
    
console.log(evenOrOdd(5))

function string(sentence) {
    if (sentence.length <= 20) {
        return (sentence + " " + Sentence);
    } else {
        return (sentence.length/2);
    }
}

console.log(string("here is a sentence"))