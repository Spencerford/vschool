var hello = "hello";

console.log(hello.toUpperCase());

var str = "here we go";

console.log(str.length);

var add = "add this";
var add2 = "to this";

console.log(add + add2);

var long = "here is a very long message that should be cut in half";

console.log(long.slice(20, 54));

var userinput = prompt("here is a long long message");

var changestr = function(str) {
    if(str.length >= 20) {
        return str.substr(str.length / 2);
    } else {
        return str;
    }
}

console.log(changestr(userinput));



var userinput = prompt("sentence please");
var index = parseInt(prompt("please a starting point"));

console.log(userinput.substr(index));