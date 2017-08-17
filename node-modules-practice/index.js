let readlineSync = require("readline-sync");
let cal = require("./cal.js");


let num1 = Number(readlineSync.question('May I have the first number'));
let num2 = Number(readlineSync.question('May I have the second number?'));
let calc = ['add', 'sub', 'div', 'mult'];
let index = readlineSync.keyInSelect(calc, 'which operation');
console.log("the answer is...  " + cal[calc[index]](num1, num2));