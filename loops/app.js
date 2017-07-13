var str = "longstring";

for (var i = 0; i < str.length; i++) {
    console.log(str[i])
}

function myfunction() {
    var a = prompt("type a string"); // Ths is the string I typed in
    var b = prompt("Search term"); // I
    return a.indexOf(a);
}

console.log(myfunction());

var arra = [1, 4, 2, 6, 42, 65, 76, 93]

function quit() {
    for (var i = 0; i < arra.length; i++){
        if (arra[i] === 42) {
            return "found";
        }
    }
    return " not found";
}

console.log(quit())

//Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten.

var print = [13, 3, 20, 40, 4, 11, 7, 99, 89, 12];
Math.min(print);

//function small() {
//    for (var i = 0; i < print.length; i++){
//        Math.min(print[i]);
//    }
//}

console.log(Math.min.apply(print))


